package main

import (
	"flag"
	"fmt"
	"os"
	"sort"
	"strings"

	"github.com/xuri/excelize"
)

var INDEX_HEADER int = 6

func main() {

	sourceFilePath := flag.String("src", ".", "Path of solutions.xlsx and eans.xlsx (if in same directory)")
	eansFilePath := flag.String("eans", "eans.xlsx", "Path of the eans.xlsx file")
	solutionsFilePath := flag.String("solutions", "solutions.xlsx", "Path of the solutions.xlsx file")
	outputPath := flag.String("out", ".", "Path of the output files")
	outputFilename := flag.String("outFile", "solutions_cleaned.xlsx", "Name of the cleaned solutions.xlsx output")

	flag.Parse()

	flag.Visit(func(f *flag.Flag) {
		if f.Name == "src" {
			*sourceFilePath = strings.TrimRight(*sourceFilePath, "/")
			*eansFilePath = fmt.Sprintf("%v/eans.xlsx", *sourceFilePath)
			*solutionsFilePath = fmt.Sprintf("%v/solutions.xlsx", *sourceFilePath)
		}
	})

	fmt.Printf("Fichier EANs : %v\n", *eansFilePath)
	fmt.Printf("Fichier solutions : %v\n", *solutionsFilePath)

	eansXlsx, errors := excelize.OpenFile(*eansFilePath)

	handleError(errors)

	solutionsXlsx, errors := excelize.OpenFile(*solutionsFilePath)

	handleError(errors)

	activeSheetNameInEans := getActiveSheetName(eansXlsx)
	activeSheetNameInSolutions := getActiveSheetName(solutionsXlsx)

	notFoundEanByReferences := make(map[string][]string)
	eansCodes := fetchCellsFromColumn(eansXlsx, activeSheetNameInEans, "A")
	productReferences_applyConsumptionCoef_defaultArticleEan := fetchCellsFromColumn(solutionsXlsx, activeSheetNameInSolutions, "N")
	var validEansPerCell []string
	lineNumber := INDEX_HEADER + 1

	for _, cell := range productReferences_applyConsumptionCoef_defaultArticleEan {
		var finalCell strings.Builder

		lines := strings.Split(cell, "\n")

		for _, line := range lines {
			eanInLine := strings.Split(line, ",")[2]
			if isEanInEansList(eanInLine, eansCodes) {
				finalCell.WriteString(line)
				finalCell.WriteString("\n")
			} else {
				referenceValue, errors := solutionsXlsx.GetCellValue(activeSheetNameInSolutions, fmt.Sprintf("A%v", lineNumber))
				handleError(errors)
				notFoundEanByReferences[eanInLine] = append(notFoundEanByReferences[eanInLine], referenceValue)
			}
		}
		if finalCell.Len() > 0 {
			validEansPerCell = append(validEansPerCell, strings.TrimRight(finalCell.String(), "\n"))
		}
		//fmt.Println(index, lineNumber)
		lineNumber++
	}

	for cellIndex, cellValue := range validEansPerCell {
		solutionsXlsx.SetCellValue(activeSheetNameInSolutions, fmt.Sprintf("N%d", (INDEX_HEADER+1+cellIndex)), cellValue)
	}

	handleError(solutionsXlsx.SaveAs(fmt.Sprintf("%v/%v", *outputPath, *outputFilename)))

	if len(notFoundEanByReferences) > 0 {

		// Création du fichier d'erreur pour les eans non trouvés

		notFoundEansXlsx := excelize.NewFile()
		notFoundEansSheetName := "EANS non trouvés (default_article_ean)"
		notFoundEansXlsx.SetSheetName("Sheet1", notFoundEansSheetName)

		headerStyle, errors := notFoundEansXlsx.NewStyle(`{"font": {"bold": true}}`)

		handleError(errors)

		errors = notFoundEansXlsx.SetRowStyle(notFoundEansSheetName, 1, 1, headerStyle)

		handleError(errors)

		notFoundEansXlsx.NewSheet(notFoundEansSheetName)
		notFoundEansXlsx.SetCellValue(notFoundEansSheetName, "A1", "Code EAN")
		notFoundEansXlsx.SetCellValue(notFoundEansSheetName, "B1", "Références")

		beginningLine := 2

		orderedNotFoundEans := make([]string, 0, len(notFoundEanByReferences))

		for key := range notFoundEanByReferences {
			orderedNotFoundEans = append(orderedNotFoundEans, key)
		}

		sort.Strings(orderedNotFoundEans)

		for _, eanValue := range orderedNotFoundEans {

			cellOfReferences := strings.Join(notFoundEanByReferences[eanValue], "\n")
			cellOfReferences = strings.TrimRight(cellOfReferences, "\n")

			notFoundEansXlsx.SetCellValue(notFoundEansSheetName, fmt.Sprintf("A%d", beginningLine), eanValue)
			notFoundEansXlsx.SetCellValue(notFoundEansSheetName, fmt.Sprintf("B%d", beginningLine), cellOfReferences)

			beginningLine++
		}

		if _, err := os.Stat(*outputPath); err != nil {
			if os.IsNotExist(err) {
				os.MkdirAll(*outputPath, 0777)
			} else {
				handleError(err)
			}
		}

		handleError(notFoundEansXlsx.SaveAs(fmt.Sprintf("%v/solutions_not_found_eans.xlsx", *outputPath)))
		fmt.Printf("%d code(s) EAN(s) non trouvé(s)\n", len(orderedNotFoundEans))

	} else {
		fmt.Println("Aucun code EAN non référencé")
	}
}

func isEanInEansList(eanCode string, eansCodes []string) (answer bool) {

	answer = false

	for _, code := range eansCodes {
		if code == eanCode {
			answer = true
			break
		}
	}

	return answer
}

func referenceIndex(cells []string, columnName string) (index int, err error) {

	for i, element := range cells {
		if element == columnName {
			index = i
			break
		}
	}

	if index == 0 {
		return 0, fmt.Errorf("Reference called \"%s\" index couldn't be found !", columnName)
	}

	return index, nil
}

func getActiveSheetName(xlsx *excelize.File) (activeSheetName string) {

	activeSheetIndex := xlsx.GetActiveSheetIndex()
	activeSheetName = xlsx.GetSheetName(activeSheetIndex)

	return activeSheetName
}

func fetchCellsFromColumn(xlsx *excelize.File, sheet string, letter string) (cells []string) {

	rows, errors := xlsx.GetRows(sheet)

	handleError(errors)

	for i := INDEX_HEADER + 1; i <= len(rows); i++ {
		value, error := xlsx.GetCellValue(sheet, fmt.Sprintf("%s%d", letter, i))
		handleError(error)
		cells = append(cells, value)
	}

	return cells

}

func handleError(err error) {
	if err != nil {
		fmt.Printf("Error : %s\n", err)
		os.Exit(1)
	}
}
