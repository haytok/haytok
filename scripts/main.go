package main

import (
	"encoding/xml"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/haytok/haytok/model"
)

const (
	baseBlogUrl    = "https://hakiwata.jp"
	TemplateREADME = "./TEMPLATE_README.md"
	filepath       = "../README.md"
)

var (
	writer io.Writer = os.Stderr
	Info             = log.New(writer, "INFO: ", log.LstdFlags)
	Error            = log.New(writer, "ERROR: ", log.LstdFlags)

	NumberOfContents = 5
)

func getRSSXML(url string) ([]byte, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	defer res.Body.Close()

	resXML, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	return resXML, err
}

func ReadREADME(filepath string) (string, error) {
	content, err := os.ReadFile(filepath)
	if err != nil {
		return "", err
	}

	return string(content), nil
}

func CreateNewREADME(readme *string, rss model.Rss, numberOfContents *int) {
	numberOfTotalContents := len(rss.Items)

	if *numberOfContents > numberOfTotalContents {
		*numberOfContents = numberOfTotalContents
	}

	for n := 0; n < *numberOfContents; n++ {
		title := strings.Replace(rss.Items[n].Title, "\n", "", -1)
		link := rss.Items[n].Link

		*readme += fmt.Sprintf("- [%s](%s)\n", title, link)

		if n != (*numberOfContents - 1) {
			*readme += "\n"
		}
	}
}

func writeREADME(filepath, content string) error {
	return os.WriteFile(filepath, []byte(content), 0644)
}

func main() {
	readme, err := ReadREADME(TemplateREADME)
	if err != nil {
		Error.Printf("Failed to open a %s.", TemplateREADME)
		return
	}

	rssUrl := baseBlogUrl + "/index.xml"
	resXML, err := getRSSXML(rssUrl)
	if err != nil {
		Error.Print("Failed to get RSS data.")
		return
	}

	rss := model.Rss{}
	xml.Unmarshal(resXML, &rss)
	CreateNewREADME(&readme, rss, &NumberOfContents)

	Info.Print(rssUrl)
	Info.Print(readme)

	err = writeREADME(filepath, readme)
	if err != nil {
		Error.Print("Failed to write a README.md.")
		return
	}

	Info.Print("Finished.")
}
