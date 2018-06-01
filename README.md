# Ontimize Web Tree

An implementation of a tree component for Ontimize Web.


* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web Tree module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-tree){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-tree/issues){:target="_blank"} section.

## Installation

```bash
  npm install ontimize-web-ngx-tree --save
```

## Usage

Finally, you can use ontimize-web-ngx-tree in your Ontimize Web project.

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-tree/styles.scss",
  ....
],
...
```

### Import in an application module

Include the library tree module into your app in the module where you want to use it.

```bash
...
import { OTreeModule } from 'ontimize-web-ngx-tree';
...

@NgModule({
  imports: [
    OTreeModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```