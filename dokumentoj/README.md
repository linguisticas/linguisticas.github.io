---
**Enlaces**

- __[Lingüísticas](https://linguisticas.github.io/pica/demo/)__: esta es la página principal.

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Énfasis

**Texto en negritas 1**

__Texto en negritas 2__

*Texto en itálicas 1*

_Texto en itálicas 2_

|Texto en versalitas 1|

||Texto en versalitas 2||

§Texto en versalitas 3§

§§Texto en versalitas 4§§

~~Tachado~~

~~~
Monoespaciado
~~~

### Código

```js
console.log("Hello")
```

___
## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello Page</title>
</head>
<body>
  <h1>Hola Mundo</h1>
  <p>This is a test paragraph with <strong>bold</strong> text.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
</html>
```
## SQL

```sql
SELECT * FROM users WHERE age > 18;
```

## PHP

```php
<?php
$name = "Mundo";
echo "Hola, " . $name . "!";
?>
```

## C#

```csharp
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string name = "Mundo";
        Console.WriteLine($"Hola, {name}!");
    }
}
```

## Horizontal Rules
___

---
jj
***

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
function greet(name) {
  const message = `Hola, ${name}!`;
  console.log(message);
}

greet("Mundo");
```

```cpp
#include <iostream>
using namespace std;

int main() {
  string name = "Mundo";
  cout << "Hola, " << name << "!" << endl;
  return 0;
}
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

### Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O
- 

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Los llamados ||sustantivos eventivos||[^third].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

Duplicated footnote reference[^second].

Duplicated footnote reference[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

[^third]: Mierda.

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.
However:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$
is larger.

$$\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,\rm{d}\xi$$

$$\mathsf{E = mc^2}$$

```abc
X:1
T:Simple Scale
M:4/4
L:1/4
K:C
C D E F | G A B c |