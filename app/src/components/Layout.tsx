import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default class Layout extends React.PureComponent<
  {},
  { children?: React.ReactNode }
> {
  public render() {
    return (
      <React.Fragment>
        <NavMenu />
        <Container>{this.props.children}</Container>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}
