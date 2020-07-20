// naaaaaaaaaaaaaaav

let cont = document.querySelector(".lines-container");
let menu = document.querySelector(".menu");
let pointer = document.querySelector(".pointer");
let felesh = document.querySelector(".down");
let blog = document.querySelector(".blog");
let contact = document.querySelector(".contact");
let blogChild = document.querySelector(".blog-child");
let contactChild = document.querySelector(".contact-child");

felesh.addEventListener("click", function () {
  felesh.classList.toggle("up");
});

cont.addEventListener("click", () => {
  blog.classList.remove("content");
  // برای باز و یستن منو ا ز طریق ایکون اصلی
  contact.classList.remove("content");
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    blogChild.style.maxHeight = null;
    contactChild.style.maxHeight = null;
    pointer.style.display = "none";
    // جابه جایی فلش باز و بسته
    setTimeout(() => {
      felesh.classList.toggle("up");
      pointer.style.display = "block";
    }, 500);
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    pointer.style.display = "none";
    setTimeout(() => {
      felesh.classList.toggle("up");
      pointer.style.display = "block";
    }, 500);
  }
});

// فلششششششششش

pointer.addEventListener("click", () => {
  blog.classList.remove("content");
  // باز وبسته گردن منو از طریق فلش
  contact.classList.remove("content");
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    blogChild.style.maxHeight = null;
    contactChild.style.maxHeight = null;
    pointer.style.display = "none";
    // جابه جایی فلش باز و بسته
    setTimeout(() => {
      pointer.classList.remove("pointer-up");
      pointer.style.display = "block";
    }, 500);
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    pointer.style.display = "none";
    setTimeout(() => {
      pointer.classList.toggle("pointer-up");
      pointer.style.display = "block";
    }, 500);
  }
});
// زیر مجموعه های اولی
blog.addEventListener("click", () => {
  if (blogChild.style.maxHeight) {
    blogChild.style.maxHeight = null;
    // دکمه باز و بستن زیرمجموعه
    blog.classList.add("btn-anime");
    blog.classList.remove("content");
    setTimeout(() => {
      blog.classList.remove("btn-anime");
    }, 100);
  } else {
    blogChild.style.maxHeight = blogChild.scrollHeight + "px";
    menu.style.maxHeight = menu.scrollHeight + blogChild.scrollHeight + "px";
    // دکمه باز و بستن زیرمجموعه
    blog.classList.add("btn-anime");
    blog.classList.add("content");
    setTimeout(() => {
      blog.classList.remove("btn-anime");
    }, 100);
  }
});
// زیرمجموعه دوم
contact.addEventListener("click", () => {
  if (contactChild.style.maxHeight) {
    contactChild.style.maxHeight = null;
    contact.classList.add("btn-anime");
    contact.classList.remove("content");
    setTimeout(() => {
      contact.classList.remove("btn-anime");
    }, 100);
  } else {
    contactChild.style.maxHeight = contactChild.scrollHeight + "px";
    menu.style.maxHeight = menu.scrollHeight + contactChild.scrollHeight + "px";
    contact.classList.add("btn-anime");
    contact.classList.add("content");
    setTimeout(() => {
      contact.classList.remove("btn-anime");
    }, 100);
  }
});

// maiaaaaaaaaaaaaaaan aval

window.HeroFade_Object = {};
(function (window, $, that) {
  // Constructor.
  that.init = function () {
    that.cache();

    if (that.meetsRequirements) {
      that.bindEvents();
    }
  };

  // Cache
  that.cache = function () {
    that.$c = {
      window: $(window),
      heroSelector: $(".hero"),
    };
  };

  // Combine
  that.bindEvents = function () {
    that.$c.window.on("load", that.doHero);
  };

  //  requirements?
  that.meetsRequirements = function () {
    return that.$c.heroSelector.length;
  };

  that.doHero = function () {
    $(window).scroll(function () {
      $(".hero").css(
        "opacity",
        1 - $(window).scrollTop() / $(".hero").height()
      );
    });
  };

  // Engage!
  $(that.init);
})(window, jQuery, window.HeroFade_Object);

// main main 222

var section = $("li");

function toggleAccordion() {
  section.removeClass("active");
  $(this).addClass("active");
}

section.on("click", toggleAccordion);

// mainmaijn 444444444444444444
$(document).ready(function () {
  var $sm = 480;
  var $md = 768;

  function resizeThis() {
    $imgH = $(".middle img").width();
    if ($(window).width() >= $sm) {
      $(".left,.right,.section").css("height", $imgH);
    } else {
      $(".left,.right,.section").css("height", "auto");
    }
  }

  resizeThis();

  $(window).resize(function () {
    resizeThis();
  });

  $(window).scroll(function () {
    $(".section").each(function () {
      var $elementPos = $(this).offset().top;
      var $scrollPos = $(window).scrollTop();

      var $sectionH = $(this).height();
      var $h = $(window).height();
      var $sectionVert = $h / 2 - $sectionH / 4;

      if (
        $elementPos - $sectionVert <= $scrollPos &&
        $elementPos - $sectionVert + $sectionH > $scrollPos
      ) {
        $(this).addClass("animate");
      } else {
        $(this).removeClass("animate");
      }
    });
  });

  $(".btn-primary").click(function () {
    alert("I lied");
  });
});

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

// foooooooooooooooooooooter

// mffffffffffffffffffffff

const words = ["Build", "Create", "Design", "Code"],
  colors = ["blue", "green", "yellow", "red"],
  text = document.querySelector(".text");

// Generator
function* generator() {
  var index = 0;
  while (true) {
    yield index++;

    if (index > 3) {
      index = 0;
    }
  }
}

// Printing effect
function printChar(word) {
  let i = 0;
  text.innerHTML = "";
  text.classList.add(colors[words.indexOf(word)]);
  let id = setInterval(() => {
    if (i >= word.length) {
      deleteChar();
      clearInterval(id);
    } else {
      text.innerHTML += word[i];
      i++;
    }
  }, 500);
}

//  effect
function deleteChar() {
  let word = text.innerHTML;
  let i = word.length - 1;
  let id = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
      i--;
    } else {
      text.classList.remove(colors[words.indexOf(word)]);
      printChar(words[gen.next().value]);
      clearInterval(id);
    }
  }, 300);
}

//  generator
let gen = generator();

printChar(words[gen.next().value]);
