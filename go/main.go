package main

import (
	"bytes"
	"fmt"
	"net/http"
	"time"
)

func helloHandler(w http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case http.MethodGet:
		fmt.Fprintf(w, "Hello world")
	case http.MethodPost:
		if err := req.ParseForm(); err != nil {
			fmt.Println("Something went bad")
			fmt.Fprintln(w, "Something went bad")
			return
		}
		for key, value := range req.PostForm {
			fmt.Println(key, "=>", value)
		}
		fmt.Fprintf(w, "Information received: %v\n", req.PostForm)
	}
}

func timeHandler(w http.ResponseWriter, req *http.Request) {
	current_time := time.Now()

	fmt.Fprint(w, current_time.Format("15:04:05"))
}

func postHandler(w http.ResponseWriter, req *http.Request) {
	url := "http://127.0.0.1:4567"

	data, err := json.marshal({
		entry: 'Start learn Go',
		author: 'Ken Tompson'
	})

	request, error := http.Post(url, "application/x-www-form-urlencoded; charset=UTF-8", bytes.NewBuffer(data))

	if error != nil {
		fmt.Print(error)
	}

	defer request.Body.Close()
}

func main() {
	current_time := time.Now()

	http.HandleFunc("/", timeHandler)
	http.HandleFunc("/hello", helloHandler)
	http.HandleFunc("/entries", postHandler)

	http.ListenAndServe(":4567", nil)
}