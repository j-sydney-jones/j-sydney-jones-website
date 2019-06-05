import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <p className="p-sm" />
        <h2>About J. Sydney Jones</h2>
        <p className="p-sm" />
        <img src={require("../assets/images/sydjones3.jpg")} style={{maxWidth: "14rem", float: "right", margin: "0 0 1rem 1rem"}} alt="J. Sydney Jones"/>
        <p>
            J. Sydney Jones is the author of travel guides, biographies, and thrillers and mysteries
            for adults and young adults. {/*J. Sydney Jones pursues a central theme in all of his
            work: illumination of the past in order to cast light on the present.*/}
            In his thrillers as well as his works of nonfiction, the emphasis is
            on historical insight.
        </p>
        <p>
            Born on a farm in northeastern South Dakota, Jones is one of four
            siblings. With the death of his father when Jones was five, the family
            moved to Oregon, where Jones grew up in a small coastal town. He attended
            university in Oregon, and then studied abroad, an experience that
            changed his life and made him want to become a writer.
        </p>
        <p>
            After graduating from college, Jones returned to Europe, living in
            Vienna, Paris, Florence, Greece, and Ireland on and off for the next
            fifteen years. During that time, he made a living as a freelance
            correspondent and language teacher, also picking up odd jobs along the
            way, including work as a messenger for the United Nations and as a
            produce man in a supermarket.{" "}
        </p>
        <p>
            During those years Jones also wrote several books, including the
            travel guides Bike and Hike, Vienna Inside-Out, Viennawalks, and
            Tramping in Europe, as well as the heavily researched Hitler in
            Vienna, 1907-1913, a history of the six years young Hitler spent in
            that city. Published initially in German translation, that biography
            won critical praise on both sides of the Atlantic.
        </p>
        <p>
            In 1985 Jones returned to the United States, taking up residence along
            the central coast of California, where he continues to freelance and
            teach both English as a second language and writing at a local
            college. Further publications included the standalone WWII thrillers,
            The Time of the Wolf and The Hero Game, as well as a standalone young
            adult historical novel, Frankie.
        </p>
        <p>
            In 2009 Jones published The Empty Mirror, the first novel in his
            "Viennese Mystery" series. Set in fin de siècle Vienna, the novels
            feature former criminal attorney Karl Werthen his longtime friend Dr.
            Hanns Gross, the real-life father of criminology. Jones followed up
            that series debut with five more novels in the same series: Requiem in
            Vienna, The Silence, The Keeper of Hands, A Matter of Breeding, and
            The Third Place.
        </p>
        <p>
            Jones has also published a number of stand-alone thrillers, including
            Ruin Value, The German Agent, Basic Law, and The Edit. He is currently
            at work on a mystery series set during World War II on the California
            coast, a contemporary espionage novel involving ghosts from
            the Cold War, and a young adult novel about refugees.
        </p>
        <p>
            When not writing books or freelancing, Jones enjoys tennis and walking
            on the beach. Married, Jones is the father of two.
        </p>
        <p className="p-sm" />
        
        <div className="card-group shd-lg">
          <div className="card">
            <div className="card-body">
              <h5>E-mail</h5>
              <p>Please send your comments and questions to the author's email</p>
              <p>
                <a className="btn" href="mailto:syd@jsydneyjones.com">Send E-mail <i className="ion-ios-arrow-forward"></i></a>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5>Blog</h5>
              <p>Visit the author's blog, Scene of the Crime</p>
              <p>
                <a className="btn" href="https://jsydneyjones.wordpress.com/" target="_blank" rel="noopener noreferrer">Scene of the Crime <i className="ion-ios-arrow-forward"></i></a>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5>Facebook</h5>
              <p>View the author's Facebook page</p>
              <p>
                <a className="btn" href="https://www.facebook.com/J-Sydney-Jones-Author-226721169288/" target="_blank" rel="noopener noreferrer">Facebook <i className="ion-ios-arrow-forward"></i></a>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
