# Items For Sale Project

* Implement a list and a detail page.
* Go to a detail page if an item in a list page is clicked.
* Retrieve data from json

# Result

For best experience, please view the project in mobile view (in chrome)
* [Screenshots](https://github.com/kaochihhui/rails_with_vue/blob/master/vueapp/screenshot.png) of the list page (left) and the detail page (right)

# Tech/framework used

* [rails/webpack](https://github.com/rails/webpacker)
* vuejs

# Prerequisites

* Ruby 2.2+
* Rails 4.2+
* Node.js 6.14.0+
* Yarn 1.x+

Based on [rails/webpack prerequisites](https://github.com/rails/webpacker#prerequisites)

# Installation

1. Download this project to your local by clicking the "Clone or download" button above
2. Open terminal
3. Go to **vueapp** directory
```
$ cd vueapp
```
4. Install packages
```
$ yarn install
```
5. Run the project
```
$ rails s
```

Noted: During development, another terminal is opened to compile the code
```
$ bin/webpack-dev-server
```

6. Open browser and go to http://localhost:3000/
* For best experience, please view in mobile view (in chrome)

# Test

* The list page is displayed as the screenshot
* The detail page is shown and the content is differed based on the item clicked in the list page
* Go back to the list page by clicking the "<" button at the top-left corner in the detail page

# Codes for making the project

* Main html structure: /app/views/pages/welcome.html.erb
* SCSS for the style: /app/assets/stylesheets/pages.scss
* Function (vuejs) for the list page: /app/javascript/packs/hello_vue.js
* Detail page component (vuejs): /app/javascript/detail_item_page.vue

---

* First time using rails to implement,thus there is still room for improvement
* If there is any feedback, please do not hesitate to tell me :)
