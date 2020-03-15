import React from "react";
import "../App.css";
import { Menu, Layout, Row, Col, Tag, Avatar } from "antd";
import "antd/es/menu/style";
import {
  HomeOutlined,
  AppstoreOutlined,
  GithubOutlined,
  GitlabOutlined,
  TwitterOutlined
} from "@ant-design/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Icon from "../static/images/images.jpg";
import "../static/css/main.css";

const { Content, Footer } = Layout;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home"
    };
  }
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Vue",
      "Angular",
      "Django Rest Framework",
      "Git",
      "Docker"
    ];
    const research = [
      "光ファイバー通信",
      "ディジタル信号処理",
      "半導体レーザ",
      "FPGA",
      "ネットワーク"
    ];
    return (
      <React.Fragment>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <HomeOutlined />
            <a href="#about">About</a>
          </Menu.Item>
          <Menu.Item key="experiences">
            <AppstoreOutlined />
            <a href="#experiences">Experiences</a>
          </Menu.Item>
          <Menu.Item key="skills">
            <AppstoreOutlined />
            <a href="#skills">Skills</a>
          </Menu.Item>
          <Menu.Item key="research">
            <AppstoreOutlined />
            <a href="#research">Research</a>
          </Menu.Item>
          <Menu.Item key="programming">
            <AppstoreOutlined />
            <a href="#programming">Competition Programming</a>
          </Menu.Item>
        </Menu>
        {/*  */}
        <Layout className="site-layout">
          <Content
            id="about"
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <h1
              style={{
                textAlign: "center"
                // display: "flex",
                // alignItems: "center"
                // flexDirection: "column"
                // justifyContent: "center"
              }}
            >
              About
            </h1>
            <div
              style={{
                textAlign: "center"
              }}
            >
              <Avatar src={Icon} size={128} />
            </div>
            <div
              style={{
                textAlign: "center"
              }}
            >
              <table border="0" align="center">
                <tr>
                  <th align="left">Name</th>
                  <td align="left">dilmnqvovpnmlib</td>
                </tr>
                <tr>
                  <th align="left">University</th>
                  <td align="left">
                    <a
                      href="http://www1b.comm.eng.osaka-u.ac.jp/"
                      target="_blank"
                    >
                      大阪大学大学院 M1
                    </a>
                  </td>
                </tr>
                <tr>
                  <th align="left">
                    <TwitterOutlined />
                  </th>
                  <td align="left">
                    <a
                      href="https://twitter.com/bilmnpvovqnmlid"
                      target="_blank"
                    >
                      bilmnpvovqnmlid
                    </a>
                  </td>
                </tr>
                <tr>
                  <th align="left">
                    <GithubOutlined />
                  </th>
                  <td align="left">
                    <a
                      href="https://github.com/dilmnqvovpnmlib"
                      target="_blank"
                    >
                      dilmnqvovpnmlib
                    </a>
                  </td>
                </tr>
                <tr>
                  <th align="left">
                    <GitlabOutlined />
                  </th>
                  <td align="left">
                    <a
                      href="https://gitlab.com/dilmnqvovpnmlib"
                      target="_blank"
                    >
                      dilmnqvovpnmlib
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </Content>
          <Content
            id="experiences"
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <h1 style={{ textAlign: "center" }}>Experiences</h1>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April  2016 - March 2020"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  // icon={<WorkIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    大阪大学 工学部 電子情報工学科 入学
                  </h2>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="May 2017 - April 2019"
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    大阪大学 生活協同組合 エンジニア アルバイト
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    Angular, Django Rest Framework を用いて
                    <a
                      href="https://www.miraikikin.osaka-u.ac.jp/donation/application"
                      target="_blank"
                    >
                      大学の寄付システム
                    </a>
                    の開発に携わっていました。
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="July 2019"
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    ICPC 国内予選参加
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    予選参加チーム全体で、495チーム中75位、大学中では7チーム中2位でした。
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="August 2019"
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    いい生活 エンジニア サマーインターン 参加
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    {/* Strategy, Social MediaStrategy, Social MediaStrategy, Social */}
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="September 2019"
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    GMOインターネット Webエンジニアリングコース 参加
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    {/* Creative Direction, User Experience, Visual Design */}
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="December 2019"
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    NECプラットフォームズ 研究開発インターンシップ参加
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    半導体レーザの位相雑音を測定するためにFPGAを用いた自作データ集録装置を開発しました。
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="October 2019 - present"
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    Artill エンジニア アルバイト
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    {/* Creative Direction, Visual Design */}
                    React, Redux を用いてアート作品の
                    <a href="http://13.115.35.201/" target="_blank">
                      ECサイト
                    </a>
                    のフロントエンドの開発をしています。
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="September 2019"
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  // icon={<SchoolIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    RECRUIT SPEED HACKATHON 参加
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    HOT PEPPER
                    Beautyの一部のフロントエンドを高速化するハッカソンに参加しました。
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April 2020 -"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  // icon={<WorkIcon />}
                >
                  <h2
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                  >
                    大阪大学大学院 工学研究科 電気電子情報通信工学専攻 入学
                  </h2>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </Content>
          <Content
            id="skills"
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <h1 style={{ textAlign: "center" }}>Skills</h1>
            </div>
            <div style={{ textAlign: "center" }}>
              {skills.map(item => (
                <Tag color="processing">{item}</Tag>
              ))}
            </div>
          </Content>
          <Content
            id="research"
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <h1 style={{ textAlign: "center" }}>Research</h1>
              <div style={{ textAlign: "center" }}>
                {research.map(item => (
                  <Tag color="processing">{item}</Tag>
                ))}
              </div>
            </div>
          </Content>
          <Content
            id="programming"
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <h1 style={{ textAlign: "center" }}>Competition Programming</h1>
              <div style={{ textAlign: "center" }}>
                <Tag color="success">
                  <a
                    href="https://atcoder.jp/users/dilmnqvovpnmlib?lang=ja"
                    target="_blank"
                  >
                    AtCoder Rate : 854
                  </a>
                </Tag>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2020 Created by dilmnqvovpnmlib
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Main;
