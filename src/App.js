import React, { useRef, useEffect } from "react";
import { Container, Grid, Typography, CssBaseline } from "@material-ui/core";
import { TimelineLite, Power2 } from "gsap";
import "./App.scss";

import drums from "./images/drums.jpg";

function App() {
  let image = useRef(null);
  let imgContainer = useRef(null);
  let text = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(imgContainer, 2, {
      y: "100vh",
      ease: Power2.easeInOut,
    })
      .from(image, 2, { scale: 1.6, ease: Power2.easeInOut, delay: -2 })
      .from(text, 1, { opacity: 0, y: 20, ease: Power2.easeInOut });
  }, []);
  return (
    <>
      <CssBaseline />
      <Container className="container" maxWidth={false}>
        <div>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={12} md={6}>
              <div className="image-container">
                <div
                  ref={(el) => (imgContainer = el)}
                  className="image-container-inner"
                >
                  <img
                    ref={(el) => (image = el)}
                    className="image"
                    src={drums}
                    width="100%"
                  />
                </div>
              </div>
            </Grid>
            <Grid
              ref={(el) => (text = el)}
              className="text-container"
              item
              xs={12}
              md={6}
            >
              <Typography variant="h2" className="title">
                Music unites us
              </Typography>
              <Typography variant="body2" className="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
