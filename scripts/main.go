package main

import (
	"encoding/xml"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

type Rss struct {
	XMLName xml.Name `xml:"rss"`
	Items   []Item   `xml:"channel>item"`
}

type Item struct {
	XMLName xml.Name `xml:"item"`
	Title   string   `xml:"title"`
	Link    string   `xml:"link"`
}

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

func createNewREADME(readme *string, rss Rss, numberOfContents *int) {
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
	var (
		writer io.Writer = os.Stderr
		Info             = log.New(writer, "INFO: ", log.LstdFlags)
		Error            = log.New(writer, "ERROR: ", log.LstdFlags)
	)

	url := "https://hakiwata.jp/index.xml"
	readme := "# Hi there 🤞\n\n" +
		"- I'm a graduate student in Japan.\n\n" +
		"# Recent Posts on [My blog](https://hakiwata.jp)\n\n"
	numberOfContents := 5
	rss := Rss{}

	resXML, err := getRSSXML(url)
	if err != nil {
		Error.Print("Failed to get RSS data.")
		return
	}

	xml.Unmarshal(resXML, &rss)
	createNewREADME(&readme, rss, &numberOfContents)

	Info.Print(url)
	Info.Print(readme)

	filepath := "../README.md"
	err = writeREADME(filepath, readme)
	if err != nil {
		Error.Print("Failed to write a README.md.")
		return
	}

	Info.Print("Finished.")
}
