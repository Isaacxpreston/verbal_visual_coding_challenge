const styles = {
  content: {
		display: "flex",
		flexDirection: "column",
    background: "white",
	},
  wrapper: {
    margin: "auto",
    paddingTop: "8.5em",
    paddingBottom: "8.5em",
    '@media (max-width: 600px)': {
      paddingTop: 0
    }
  },
  title: {
    margin: "auto",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2em",
    padding: "2px",
  },
  linkText: {
    textAlign: "center",
    fontSize: "0.85em",
    padding: "2px",
  }
}

export default styles