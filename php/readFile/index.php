<?php

Class Student {

}

$fileName = 'fidelite2022-05.csv';

if (($handle = fopen($fileName, "r")) !== FALSE) {
    $data = fgetcsv($handle, 1000, ",");

    var_dump(count($data));
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        $row++;
        for ($c=0; $c < $num; $c++) {
            $student = new Student($data[0], intval($data[1]), intval($data[2]), explode(",", $data[3]), $data[4], floatval($data[5]));
            $this->studentList[] = $student;
        }
    }
    fclose($handle);
}
