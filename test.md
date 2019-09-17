# [Sattarov Faat](https://github.com/satfaat) - Junior web developer
* Country: Russia, Samara
* Date of birth: 11.08.1986

## About me

I don’t have much experience. There was branch that programming controllers in the department where I worked as design engineer. 
And that is why I started interested in programming. I started to learn java by myself.
And in university I learned c++, html and sql. So [HTML](https://developer.mozilla.org/ru/docs/Web/HTML) was the easiest start to do web site. Then I switched to learn web programming by O'Reilly books. And also during studying in university I try to find job. But it was not easy and unsuccessful for me.  
I also went to PHP courses to company that told us we need first to by their courses and then they will hire us while was studying in university. But after we completed courses they even didn't give us certificates.
So it became my hobby. For my diploma I did a website with PHP and [SQL](https://www.w3schools.com/sql/default.asp). Went work to Help Desk and now working in SSI Schaefer. But I still interested in doing web sites and trying to do web application and practice in web programming in my free time. But for me will be much better if I could spend more time on practicing in programming. I try to learn basics of [Java](https://www.oracle.com/technetwork/java/javase/documentation/index.html), [PHP](https://www.php.net/manual/en/), [javaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), C#, [ruby](https://www.ruby-lang.org/en/documentation/), [Python](https://www.python.org/doc/). But I decided to continue learn javaScript first. And then to learn Python as it also used for web development for example [django](https://docs.djangoproject.com/en/2.2/). Because try to learn many languages it makes no sense.
Now I'm studying javascript/front-end courses in [RsSchool](https://docs.rs.school/#/README).

| Contacts| | 
| --- | --- |
| cell phone | +7 (917) 159 7824 |
| skype | satfaat |
| e-mail | satfaat@gmail.com |

#### Site links 

| cv | achievements | git |
| --- | --- | --- |
| [LinkedIn](https://www.linkedin.com/in/faat-sattarov-571b69134/) | [codecademy achievements](https://www.codecademy.com/profiles/core4520403572) | [github profile](https://github.com/satfaat) |
| [hh.ru](https://samara.hh.ru/resume/ded85859ff0242f91a0039ed1f3361596f3468) | [website](http://nontest.000webhostapp.com/) | |
|  | [rs.school](https://app.rs.school/login) | |


## CODE EXAMPLES

#### Example of PHP code: auto inserting of images to html.
```php
<?php
define('IMGDIR', 'images/slideshow/');
$scan=scandir(IMGDIR);
echo '<div class="phoenix-slider">';
for($i=0; $i<count($scan); $i++){
	$ext= substr($scan[$i], strpos($scan[$i], '.'));//extension
	$file_types = array('.jpg', '.gif', '.bmp', '.png', '.jpeg',
							'.JPG', '.BMP', '.PNG', '.JPEG');
		if (in_array ($ext, $file_types)){
			echo '<div class="phoenix-feather">
						<img src="' . IMGDIR . $scan[$i] . '" alt="' . $scan[$i] . '">
					</div><!--END phoenix-feather-->';
		}
}
echo '</div><!--END phoenix-slider-->';
?>
```

#### HTML example: form for contact
```html
<form class="contact" action="contact_form.php" method="post">
	<fieldset>	<legend>Или отправить нам сообщение через форму ниже:</legend>
		<p class="form">
            <input type="text" name="name_id" value="" size="40" placeholder="Имя..." />
		</p>
		<p class="form">
			<input type="text" name="email" id="email" size="40" placeholder="Email" required />
		</p>
		<p class="form">
			<input type="text" name="phone" id="phone" size="40" placeholder="Ваш телефон..." />
		</p>
		<p class="form">
			<textarea rows="6" cols="50" name="comment" placeholder="Текст письма..."></textarea>
		</p>
		<p class="form">
			<input type="submit" id="send_button" value="Отправить" />
			<input type="reset" value="Очистить" />
		</p>
	</fieldset>
</form>
```

#### Javascript example: include part of html (header and footer)
```js
/* INCLUDE */ 
var title = (document.body.id != "") ? title = document.body.id + " " + navigator.onLine : title = "No title ";
var meta = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'];
var linkcss = [
    "<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'>",
    "<link rel='stylesheet' href='css/own.css'/>"];
var linkjs = [    
    '<script src="js/mainmenu.js"></script>',
    '<script src="js/clock.js"></script>',
    '<script src="js/effects.js"></script>'];
var linkjsLib = ['<script src="https://www.w3schools.com/lib/w3.js"></script>',
                    '<script src="https://cdn.jsdelivr.net/npm/vue"></script>',
                    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>',
                    '<noscript>You need to enable JavaScript to view the full site.</noscript>',
                    '<script src="js/modernizr.js"></script>'];

    // run function in HEAD
function addToHead(title, meta, linkcss){
    return "<title>" + title + "</title>" + meta.concat(linkcss, linkjsLib).join('');
}; document.head.insertAdjacentHTML('beforeend', addToHead(title, meta, linkcss));

  // function to add content in FOOTER
function addToFooter(linkjs){
    return linkjs.join('');
}; document.getElementById("htmFooter").insertAdjacentHTML('beforeend', addToFooter(linkjs));

var add_to_footer = (linkjs) => { return linkjs.join(''); }
    document.getElementById("htmFooter").insertAdjacentHTML( 'beforeend', add_to_footer(linkjs) );
//w3.includeHTML();
/* END OF INCLUDE */
```

#### Javascript example: email address parsing
```js
var ml = {
    atSign: "@", firstPart: "sat",
    ispP1: "faat", ispP2: "ma",
    ispP3: "il.ru", mToPart1: "mai",
    mToPart2: "lto:",
    wholeAddress: function() { return this.firstPart + this.ispP1 + this.atSign + this.ispP2 + this.ispP3; },
    mt: function() { return this.mToPart1 + this.mToPart2; },
    hrefP1: function() { return "<a href =" + this.mt() + this.wholeAddress() + "> Пишите мне.</a>"; }
}; document.write( "<p> click here to email me </p>" + " " + ml.hrefP1() );
```

## SKILLS

* HTML5 (9/10) and CSS3 (7/10)
* SQL (7/10)
* JavaScript (5/10) and jQuery (4/10)
* PHP (4/10)
* Linux (5/10) and Windows (9/10)

## LANGUAGES

* Russian (native)
* English (IELTS: B2)

## EDUCATION

| Year | University | Degree |
| --- | --- | --- |
| 2012 – 2015 | Volga State University of Telecommunications and Informatics | Evening department: Bachelor’s degree in Computer Science|
| 2004 – 2009 | Samara State Polytechnical Institute | Speciality: electric power systems and networks; Qualification: electrical engineer |

## EXPERIENCE

### Technical IT support engineer

| Year | Company | 
| --- | --- |
| Jul 2019 – Present | [LLC "SSI Schaefer"](https://www.ssi-schaefer.com/ru-ru) (Samara Region, Russian Federation) |

Description: 
* first level.

### Main technical support consultant

| Year | Company | 
| --- | --- |
| Dec 2017 – Jul 2019 | LLC "SSI Schaefer" (Samara Region, Russian Federation) |

Description: 
* troubleshooting conveyor system;
* remote support of server:
    * checking log-file,
    * checking processes and etc;
* remote support of pcx and plc;
* connecting to database in some cases via sqldeveloper;
* helping in maintenance of conveyor system;
* creating tickets:
    * solving issues of first level,
    * translating into English and vice versa;
* communication with customers and with second level specialists;
* working with technical documentation and schemes;
* business trips to warehouses;
* additional night shifts.

### Senior Technical Support Consultant

| Year | Company | 
| --- | --- |
| Nov 2016 – Dec 2017 | LLC "SSI Schaefer" (Samara Region, Russian Federation) |

Description: 
* maintenance and technical support of automated conveyor warehouses (contact level).

### Senior Customer Support Engineer

| Year | Company | 
| --- | --- |
| Apr 2015 – Dec 2016 | [LLC «Regional center of information security»](http://rcib.info/) (Samara Region, Russian Federation) |

Description: 
* fix CMS, because of that, it's possible to add a new sections to the site;
* technical support our clients by the phone. Solve problems, which appears during the work with software of SKB Kontur (SAAS- products);
* remote access to our clients, teaching our clients how to work with our products;
* site administration of rcib.info, add new content;
* change and repair computer hardware;
* install, sustain, and troubleshoot hardware and software on network servers and personal computers and upgrade and configure PC;
* installation and technical support of a cash machine.

### Design engineer in the department of low voltage equipment design

| Year | Company | 
| --- | --- |
| Aug 2011 – Jun 2012 | CJSC Electroshield Samara (Samara Region, Russian Federation) |

Description: 
* circuit design of elementary scheme and layout scheme;
* searching of required materials;
* development of components and products for low-voltage equipment in accordance with the requirements of GOST standards and Unified system for design documentation;
* writing specifications;
* assembly support.

### Design engineer in the department of high voltage equipment design

| Nov 2010 – Aug 2011 | Company | 
| --- | --- |
| Jul 2019 – Present | CJSC Electroshield Samara (Samara Region, Russian Federation) |

Description: 
* constructed trolley for vacuum switch;
* constructed Mount Lock for the door of the electricity substation;
* searching of required materials;
* development of components and products for 35 kV substation in accordance with the requirements of GOST standards and Unified system for design documentation;
* writing specifications;
* assembly support.

### Engineer

| Year | Company | 
| --- | --- |
| Dec 2009 – Feb 2010 | OJSC "RCC "Progress"" (Samara Region, Russian Federation) |

Description: 
* faulty estimates;
* reconstruction of electric system.

### Apprentice Construction Electrician

| Year | Company | 
| --- | --- |
| Jul 2005 – Aug 2005 | OJSC "Electroshield" (Samara Region, Russian Federation) |

Description: 
* installation of low voltage equipment.

## Support
Tools and manuals that I use to build **markdown**:
* [dillinger - online editor](https://dillinger.io/)
* [markdown-cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
* [GitLab Docs](https://docs.gitlab.com/ee/user/markdown.html)
* [mastering-markdown](https://guides.github.com/features/mastering-markdown/)
* [markdown demo](https://markdown-it.github.io/)