import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  container: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  heading: {
    fontSize: 24,
    marginBottom: 10
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 1.5
  }
});

const Component = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View id="content-id" className='container'>
          <View>
            <View className="ViewWrapper">
              <View className="l-Wrapper l-Wrapper--reset@sm-down">
                <View className="u-pullRight u-hidden@xs-down">
                  <Text>
                    <Text className="ViewWrapper-btn ViewWrapper-btn--main" href="http://sonjastrieder.com/download/sonja-strieder-frontend-ui-developer.pdf" target="_blank" rel="noreferrer">
                      Download
                      <Text>(pdf)</Text>
                    </Text>
                  </Text>
                </View>
                <View>
                  <Text><Text href="https://www.linkedin.com/in/sonjastrieder" target="_blank" rel="noreferrer">LinkedIn</Text></Text>
                  <Text><Text href="https://twitter.com/sonjastrieder" target="_blank" rel="noreferrer">Twitter</Text></Text>
                  <Text><Text href="https://codepen.io/sonjastrieder" target="_blank" rel="noreferrer">Codepen</Text></Text>
                </View>
              </View>
            </View>

            <View className="l-Wrapper">

              <View className="l-Header">
                <View className="l-Header-col">
                  <Text href="http://www.sonjastrieder.com" target="_blank" rel="noreferrer">
                    <Text className="Title">
                      <Text className="u-shadow">
                        Sonja<br />
                        Strieder
                      </Text>
                      <Text className="Title-sub">Front-end UI developer</Text>
                    </Text>
                  </Text>
                </View>
                <View className="l-Header-col Contact">
                  <View>Seattle, WA</View>
                  <View><Text className="u-link" href="http://sonjastrieder.com/" target="_blank" rel="noreferrer">www.sonjastrieder.com</Text></View>
                  <View><Text className="u-link" href="mailto:sonja.strieder@gmail.com" target="_blank" rel="noreferrer">sonja.strieder@gmail.com</Text></View>
                </View>
              </View>

              <View className="l-Section">
                <Text className="l-Section-title h3 u-hidden@sm-down">Profile</Text>
                <View className="l-Section-content">
                  <Text>I specialize in component based HTML/CSS architecture, with a focus on maintainability and scalability, a mobile first approach.</Text>
                </View>
              </View>

              <View className="l-Section">
                <Text className="l-Section-title h3">Skills</Text>
                <View className="l-Section-content">
                  <View>
                    <Text>Highly skilled in creating performant <Text className="Tag">HTML</Text>, <Text className="Tag">CSS</Text></Text>
                    <Text>Passionate about <Text className="Tag">CSS Methodologies</Text> and <Text className="Tag">CSS Preprocessors</Text></Text>
                    <Text>Skilled in creating <Text className="Tag">Component Libraries</Text>, <Text className="Tag">Prototypes</Text> and <Text className="Tag">Style Guides</Text></Text>
                    <Text>Experienced with <Text className="Tag">Templating Languages</Text> and <Text className="Tag">JavaScript</Text></Text>
                    <Text>Proficient with <Text className="Tag">Task Runners</Text> and <Text className="Tag">Package Managers</Text> and <Text className="Tag">Version Control Systems</Text></Text>
                    <Text>Knowledgeable about <Text className="Tag">User Experience</Text>, <Text className="Tag">Accessibility</Text>, <Text className="Tag">Performance</Text>, <Text className="Tag">Responsive Web Development</Text> with a <Text className="Tag">Mobile First</Text> approach, <Text className="Tag">Cross-Browser Compatibilities</Text> and <Text className="Tag">Progressive Enhancement</Text>.</Text>
                  </View>
                </View>
              </View>

              <View style={styles.wrapper}>
                <View style={styles.header}>
                  <View style={styles.title}>
                    <Text href="http://www.sonjastrieder.com" rel="noreferrer">
                      <Text style={styles.title}>Sonja</Text>
                      <Text style={styles.title}>Strieder</Text>
                      <Text style={styles.subTitle}>Front-end UI developer</Text>
                    </Text>
                  </View>
                  <View style={styles.contact}>
                    <View style={styles.contactItem}>Seattle, WA</View>
                    <View style={styles.contactItem}>
                      <Text href="http://sonjastrieder.com/" rel="noreferrer">www.sonjastrieder.com</Text>
                    </View>
                    <View style={styles.contactItem}>
                      <Text href="mailto:sonja.strieder@gmail.com" rel="noreferrer">sonja.strieder@gmail.com</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Profile</Text>
                  <View style={styles.content}>
                    <Text>I specialize in component-based HTML/CSS architecture, with a focus on maintainability and scalability, and a mobile-first approach.</Text>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Skills</Text>
                  <View style={styles.content}>
                    <Text>Highly skilled in creating performant <Text style={styles.tag}>HTML</Text>, <Text style={styles.tag}>CSS</Text></Text>
                    <Text>Passionate about <Text style={styles.tag}>CSS Methodologies</Text> and <Text style={styles.tag}>CSS Preprocessors</Text></Text>
                    <Text>Skilled in creating <Text style={styles.tag}>Component Libraries</Text>, <Text style={styles.tag}>Prototypes</Text>, and <Text style={styles.tag}>Style Guides</Text></Text>
                    <Text>Experienced with <Text style={styles.tag}>Templating Languages</Text> and <Text style={styles.tag}>JavaScript</Text></Text>
                    <Text>Proficient with <Text style={styles.tag}>Task Runners</Text>, <Text style={styles.tag}>Package Managers</Text>, and <Text style={styles.tag}>Version Control Systems</Text></Text>
                    <Text>Knowledgeable about <Text style={styles.tag}>User Experience</Text>, <Text style={styles.tag}>Accessibility</Text>, <Text style={styles.tag}>Performance</Text>, <Text style={styles.tag}>Responsive Web Development</Text> with a <Text style={styles.tag}>Mobile First</Text> approach, <Text style={styles.tag}>Cross-Browser Compatibilities</Text>, and <Text style={styles.tag}>Progressive Enhancement</Text>.</Text>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Experience</Text>
                  <View style={styles.content}>
                    <Text>Freelance Front-end Developer</Text>
                    <Text>Self-employed, Seattle (WA) May 2017 - Present</Text>

                    <Text>Front-end Developer</Text>
                    <Text>Snip Fashion, London (UK) May 2014 - June 2016</Text>
                    <Text>Re-architectedCSS/HTMLcodebasearchitectedCSS/HTMLcodebasearchitectedCSS/HTMLcodebase of the responsive Snip Fashion website for better maintainability and performance.</Text>
                    <Text>Introduced Grunt, Bower, and npm to automate common tasks, optimize frontend assets, and manage third-party packages.</Text>
                    <Text>Created and maintained a style guide to use as a reference for our design language.</Text>
                    <Text>Delivered front-end work for various external and internal projects to the backend team.</Text>
                    <Text>Built a JavaScript widget for integration of product feeds on third-party websites using the Snip Fashion API.</Text>
                    <Text>Developed prototypes including a Chrome extension and browser bookmarklet.</Text>
                    <Text>Offered guidance and support to the design team, advising on core web design principles, best practices, and workflow.</Text>

                    <Text>Web Design & Interface Specialist</Text>
                    <Text>JohnHenry, London (UK) June 2010 - May 2014</Text>
                    <Text>Worked within a team of 16+ as a front-end developer with a strong focus on web standards, semantics, accessibility, and progressive enhancement (HTML/CSS).</Text>
                    <Text>Designed and/or built Wordpress themes as well as Shopify themes from scratch or customized them depending on the client’s needs.</Text>
                    <Text>Headed the design team and designed simple and clean user interfaces.</Text>

                    <Text>Web Specialist</Text>
                    <Text>JohnHenry, London (UK) October 2009 - June 2010</Text>
                    <Text>Designed content websites and features as well as customized social media channels to improve their online presence.</Text>
                    <Text>Content management, including image processing for the web.</Text>
                    <Text>Built HTML newsletters and managed the distribution through the in-house newsletter management system.</Text>
                    <Text>Assisted the development team with HTML and CSS updates.</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Component;
