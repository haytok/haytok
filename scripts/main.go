package main

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
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

func main() {
	url := "https://hakiwata.jp/index.xml"
	req, err := http.NewRequest("GET", url, nil)
	if err == nil {
		fmt.Println(err)
	}

	client := new(http.Client)
	res, err := client.Do(req)
	if err == nil {
		fmt.Println(err)
	}
	defer res.Body.Close()

	resXML, _ := ioutil.ReadAll(res.Body)

	readme := "# Hi there 🤞\n\n" +
		"- I'm a graduate student in Japan.\n\n" +
		"# Recent Posts on [My blog](https://hakiwata.jp)\n\n"
	numberOfContents := 5
	rss := Rss{}

	xml.Unmarshal(resXML, &rss)
	for n := 0; n < numberOfContents; n++ {
		title := strings.Replace(rss.Items[n].Title, "\n", "", -1)
		link := rss.Items[n].Link
		readme += fmt.Sprintf("- [%s](%s)\n", title, link)
		if n != 4 {
			readme += "\n"
		}
	}
	log.Print(readme)

	filepath := "../README.md"
	err = os.WriteFile(filepath, []byte(readme), 0644)
}
