import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import ShoppingBag from "../../assets/shopping-bag.jpeg";
import UserImg from "../../assets/user.jpg";
import Logo from "../../assets/logo.jpg";
import { RouteComponentProps } from "react-router";

interface IHomePageProps extends RouteComponentProps {}

export class HomePageComponent extends React.Component<IHomePageProps, any> {
  render() {
    // Carousel Image items
    // {
    //   console.log("got to home1");
    // }

    const items = [
      {
        src: ShoppingBag,
        altText: "Slide 1",
        caption: "Slide 1",
        header: "Slide 1 Header",
        key: "1"
      },
      {
        src: UserImg,
        altText: "Slide 2",
        caption: "Slide 2",
        header: "Slide 2 Header",
        key: "2"
      },
      {
        src: Logo,
        altText: "Slide 3",
        caption: "Slide 3",
        header: "Slide 3 Header",
        key: "3"
      }
    ];

    return (
      <>
        {/* Carousel Component */}
        {console.log("got to home2")}
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}
