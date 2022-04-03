package main

import (
	"encoding/xml"
	"io"
	"log"
	"os"
	"testing"

	"github.com/haytok/haytok/model"
)

var (
	writer io.Writer = os.Stderr
	Info             = log.New(writer, "INFO: ", log.LstdFlags)
	Error            = log.New(writer, "ERROR: ", log.LstdFlags)
)

func useIoutilReadFile(fileName string) ([]byte, error) {
	bytes, err := os.ReadFile(fileName)
	if err != nil {
		return nil, err
	}

	return bytes, err
}

func TestCreateNewREADME(t *testing.T) {
	type args struct {
		input_filename    string
		expected_filename string
	}
	tests := []struct {
		name string
		args args
		// expected string
	}{
		{
			name: "case_1",
			args: args{
				input_filename:    "./test/case_1.xml",
				expected_filename: "./test/expected_1.md",
			},
		},
		{
			name: "case_2",
			args: args{
				input_filename:    "./test/case_2.xml",
				expected_filename: "./test/expected_2.md",
			},
		},
		{
			name: "case_3",
			args: args{
				input_filename:    "./test/case_3.xml",
				expected_filename: "./test/expected_3.md",
			},
		},
	}
	for _, tt := range tests {
		Info.Printf("%v Started.", tt.name)

		// この実装箇所が納得いっていない。
		readme := "# Hi there 🤞\n\n" +
			"- I'm a graduate student in Japan.\n\n" +
			"# Recent Posts on [My blog](https://hakiwata.jp)\n\n"
		numberOfContents := 5
		rss := model.Rss{}

		t.Run(tt.name, func(t *testing.T) {
			resXML, err := useIoutilReadFile(tt.args.input_filename)
			if err != nil {
				Error.Print("Invalid input filepath.")
			}

			xml.Unmarshal(resXML, &rss)
			CreateNewREADME(&readme, rss, &numberOfContents)
			expectedXML, err := useIoutilReadFile(tt.args.expected_filename)
			if err != nil {
				Error.Print("Invalid expected filepath.")
			}

			expectedREADME := string(expectedXML)
			if readme != expectedREADME {
				t.Errorf("CreateNewREADME() = %v, expected %v", readme, expectedREADME)
			}

			Info.Printf("%v Finished.", tt.name)
		})
	}
}
