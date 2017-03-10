const styles = {
  wrapper: {
    display: "flex",
    height: "50px",
    width: "100%",
    background: "white",
    fontSize: "1.85em",
    textTransform: "uppercase",
    boxShadow: "0px 1.5px 1.5px rgba(16, 59, 88, 0.3)"
  },
  hamburger: {
    margin: "auto",
    paddingRight: "2em",
    '@media handheld, screen and  (max-width: 375px)': {
      paddingRight: "0.5em"
    }
  },
  header: {
    margin: "auto",
    paddingLeft: "2em",
    flex: 1,
    '@media handheld, screen and  (max-width: 375px)': {
      paddingLeft: "0.5em"
    }         
  }
}

export default styles