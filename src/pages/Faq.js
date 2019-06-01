import React, { Component } from "react";

import FAQuestion from "../components/FAQuestion";

export default class Faq extends Component {
  render() {
    return (
      <div className="container">
        <p className="p-sm" />
        <h2>Frequenty Asked Questions</h2>
        <p className="p-sm" />
        <FAQuestion
          q={"Why Vienna? How did you become interested in that city?"}
          a={"I have written a dozen books and hundreds of articles for newspapers, magazines, and encyclopedias. A full half of my published travel books, historical narratives, biographies, thrillers, and mysteries deal with or are set in Vienna, Austria. This is more than a quirk on my part. I was a student in Vienna in 1968, and went on to live in that city, and in other parts of Europe, for roughly the next twenty years. I admit to being more than partly in love with Vienna. Having grown up in a small coastal town in Oregon, I was charmed and amazed by the Austrian capital, my first big city. And this was 1968, when, as a dear friend of mine liked to say, Vienna was still in the Moose Lodge stage of development. My landlady rationed my baths to once weekly; there were roughly torn squares of the daily Kurier newspaper dangling on a string from a bent nail in the clo to be used as toilet paper; beer, of a delicious species I had never known existed, was fifteen cents the pint; a good schnitzel cost less than a buck; ten p.m. was considered late; Bill Haley and His Comets still had pride of place in juke boxes. It was love at first sight. Vienna in the Sixties and Seventies had the rough-hewn quality of Dublin in the Eighties; both have since gone distinctly uptown. I liked them better as the down-at-heel dowagers they once were."}
        />

        <FAQuestion
          q={"Why Vienna? How did you become interested in that city?"}
          a={"I have written a dozen books and hundreds of articles for newspapers, magazines, and encyclopedias. A full half of my published travel books, historical narratives, biographies, thrillers, and mysteries deal with or are set in Vienna, Austria. This is more than a quirk on my part. I was a student in Vienna in 1968, and went on to live in that city, and in other parts of Europe, for roughly the next twenty years. I admit to being more than partly in love with Vienna. Having grown up in a small coastal town in Oregon, I was charmed and amazed by the Austrian capital, my first big city. And this was 1968, when, as a dear friend of mine liked to say, Vienna was still in the Moose Lodge stage of development. My landlady rationed my baths to once weekly; there were roughly torn squares of the daily Kurier newspaper dangling on a string from a bent nail in the clo to be used as toilet paper; beer, of a delicious species I had never known existed, was fifteen cents the pint; a good schnitzel cost less than a buck; ten p.m. was considered late; Bill Haley and His Comets still had pride of place in juke boxes. It was love at first sight. Vienna in the Sixties and Seventies had the rough-hewn quality of Dublin in the Eighties; both have since gone distinctly uptown. I liked them better as the down-at-heel dowagers they once were."}
        />
      </div>
    );
  }
}
