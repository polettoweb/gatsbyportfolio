import React, { Component } from "react";
import WorkshopItem from "../components/partials/WorkshopItem";
import Layout from '../components/layout'
import nuxtCover from '../images/nuxtCover.jpg'
import reactImg from "../images/react.png";
import vueImg from "../images/vueCover.jpg";

const workshopItems = [
  {
    "text": "This portfolio using React.JS as framework.",
    "image": reactImg,
    "tags": "React.JS, React-router, Sass",
    "link": "https://github.com/polettoweb/reactportfolio",
    "linkTitle": "React portfolio Github repository",
    "linkGit": "https://github.com/polettoweb/reactportfolio",
    "linkGitTitle": "React portfolio Github repository"
  },
  {
    "text": "Second version of the portfolio using Nuxt.JS as framework.",
    "image": nuxtCover,
    "tags": "Nuxt.JS, Vue.JS, Vuex, Sass",
    "link": "https://nuxt.marcopoletto.co.uk",
    "linkTitle": "Marco Poletto Nuxt.JS",
    "linkGit": "https://github.com/polettoweb/nuxtportfolio",
    "linkGitTitle": "Nuxt portfolio Github repository"
  },
  {
    "text ": "First version of the portfolio using Vue.JS as framework.",
    "image": vueImg,
    "tags": "Vue.JS, Vuex, Sass",
    "link": "https://vue.marcopoletto.co.uk",
    "linkTitle": "Marco Poletto Vue.JS",
    "linkGit": "https://github.com/polettoweb/vueportfolio",
    "linkGitTitle": "Vue portfolio Github repository"
  },
  {
    "text ": "Small example of ecommerce functionality in Vue.JS",
    "image": vueImg,
    "tags": "Vue.JS, vue-resource, Imageur API",
    "link": "https://small-ecommerce-example-vuejs-ldaubcucrv.now.sh/",
    "linkTitle": "Small ecommerce example in Vue.JS",
    "linkGit": "https://github.com/polettoweb/vue-small-ecommerce",
    "linkGitTitle": "Vue eCommerce Github repository"
  },
  {
    "text ": "Todo list Built with Vue.JS",
    "image": vueImg,
    "tags": "Vue.JS",
    "link": "https://github.com/polettoweb/todo-vue",
    "linkTitle": "Todo list Built with Vue.JS",
    "linkGit": "https://github.com/polettoweb/todo-vue",
    "linkGitTitle": "Todo list Built with Vue.JS"
  }
];
class Workshop extends Component {
  render() {
    return (
      <Layout>
        <div className="portfolio">
          <div className="portfolio__content">
            <h1>Workshop</h1>
            {workshopItems.map(item => {
              return (
                <WorkshopItem
                  text={item.text}
                  image={item.image}
                  tags={item.tags}
                  link={item.links}
                  linkTitle={item.linkTitle}
                  linkGit={item.linkGit}
                  linkGitTitle={item.linkGitTitle}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Workshop;
