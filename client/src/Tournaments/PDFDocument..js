import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 }
  ]
})

// Create styles
const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white',
      fontFamily: 'Open Sans',
    },
    section: {
      margin: 5,
      padding: 5,
      flexGrow: 1
    },
    tournamentContainer: {
        padding: '10pt',
        width: '100%',
        backgroundColor: 'white'
    },
    tournamentFlexcard: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        padding: '1.25pt',
        backgroundColor: 'white',
        borderTopLeftRadius: '2.5pt',
        borderBottomLeftRadius: '2.5pt',
        borderTopRightRadius: '2.5pt',
        borderBottomRightRadius: '2.5pt',
        marginBottom: '8pt',
        width: '100%',
    },
    contentBadge: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: '50pt',
        borderBottomLeftRadius: '50pt',
        borderTopRightRadius: '50pt',
        borderBottomRightRadius: '50pt',
        backgroundColor: 'green',
        width: '50pt',
        height: '50pt',
        marginRight: '20pt',
        marginTop: '10pt'
    },
    contentIcon: {
        marginTop: '5pt',
        marginLeft: '2pt',
        fontSize: '14pt',
        color: 'white',
        fontWeight: '700',
        lineHeight: '1.7',
        letterSpacing: '-0.01pt',
    },
    tournCardInfo: {
        //adapt for media query?
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    tournHeading: {
        //adapt for media query?
        display: 'block',
        fontSize: '20pt',
        fontWeight: '700'
    },
    tournDate: {
        marginTop: '5pt',
        display: 'inline-block',
        backgroundColor: '#e0e9fa',
        borderTopLeftRadius: '2pt',
        borderBottomLeftRadius: '2pt',
        borderTopRightRadius: '2pt',
        borderBottomRightRadius: '2pt',
        padding: '4pt 8pt',
        marginTop: '5pt',
        marginBottom: '5pt'
    },
    tournDateText: {
        fontSize: '10pt',
        textAlign: 'center',
        fontWeight: '700',
        color: '#3f78e0',
    },  
    tournLocation: {
        display: 'block',
        fontSize: '14pt',
    },
    tournamentBracket: {
        display: 'flex',
        flexDirection: 'row',
        padding: '30pt'
    },
    roundrobinContainer: {
      display: 'table',
      margin: '0 auto'
    },
    roundrobinBracket: {
      display: 'flex',
      flexDirection: 'column',
      padding: '30pt'
    },
    roundrobinMatchset: {
      boxShadow: '0 0 0 0.05rem rgba(16, 100, 170, 0.1), 0rem 0rem 1.25rem rgba(60, 64, 80, 0.08)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: '7pt 16pt',
      overflow: 'scroll',
      width: '100%',
      borderRadius: '7pt',
      marginBottom: '7pt',
      alignItems: 'center',
    },
    roundrobinMatchsetHeader: {
      color: '#3f78e0',
      fontWeight: '700',
      fontSize: '18pt',
    },
    rrActive: {
      display: 'block'
    },
    roundrobinCarousel: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });
  
  // Create Document Component
  const PDFDocument = ({badge, name, date, location, draw, drawType, standings, paperSize}) => (

    <Document>
      <Page size={paperSize} style={styles.page}>
        <View style={styles.section}>
          <View style={styles.tournamentContainer}>
            <View style={styles.tournamentFlexcard}>
                <View style={styles.contentBadge}>
                    <Text style={styles.contentIcon}>{badge}</Text>
                </View>
                <View style={styles.tournCardInfo}>
                    <Text style={styles.tournHeading}>{name}</Text>
                    <View style={styles.tournDate}>
                        <Text style={styles.tournDateText}>{date}</Text>
                    </View>
                    <Text style={styles.tournLocation}>{location}</Text>
                </View>
            </View>
          </View>
          <View style={styles.tournamentContainer}>
            { drawType == "single-elim" ?
              <Text>&nbsp;</Text>
              :
              <View style={styles.roundrobinContainer}>
                {standings}
              </View>
            }
            <View style={drawType == "single-elim" ? styles.tournamentBracket : styles.roundrobinBracket} >
              {drawType == "single-elim" ?
                draw
                :
                draw.map((round, i) => {
                  return (
                    <View style={styles.roundrobinMatchset}>
                        <Text style={styles.roundrobinMatchsetheader}>
                            Round {i + 1} Matches
                        </Text>
                        <View style={styles.rrActive} >
                            <View style={styles.roundrobinCarousel}>
                            {round}
                            </View>
                        </View>
                    </View>
                  )
                })
              }
              </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  export default PDFDocument;