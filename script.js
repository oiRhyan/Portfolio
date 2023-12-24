const relogio = setInterval(function time() {
  const h = window.document.querySelector("h3#clock-time");
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();

  if (minute < 10) {
    h.textContent = `${hour} : 0${minute}`;
  } else {
    h.textContent = `${hour} : ${minute}`;
  }
});

const night = setInterval(function night() {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();

  if (h > 17 && m > 30) {
    window.document.body.style.background = "url(../imgs/PM/bgpm.png)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    (document.body.style.backgroundPosition = "center center"),
      (document.body.style.backgroundAttachment = "fixed");
    document.body.style.transition = "ease-in-out 2s";
  }
});

const chk =
  window.document.querySelector("#chk"); /*CONFIGURAÇÃO DO HOVER E DARK MODE */
chk.addEventListener("change", function CheCk() {
  if (chk.checked == true) {
    var dash = window.document.querySelector("nav#menu");
    var menu = window.document.querySelector("i.gg-home-alt");
    var folder = window.document.querySelector("i.gg-folder");
    var info = window.document.querySelector("i.gg-clipboard");
    var contact = window.document.querySelector("i.gg-voicemail");
    var label = window.document.querySelector("label.label");
    var ball = window.document.querySelector("div.ball");
    var moon = window.document.querySelector("i.gg-moon");
    var subtext = window.document.querySelector("h2.sub-text");
    var spacecontatos = window.document.querySelector("div.contatos");
    var recenteprojeto = window.document.querySelector("div.projetorecente");
    menu.addEventListener("mouseenter", function () {
      if (chk.checked == true) {
        menu.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    menu.addEventListener("mouseleave", function () {
      menu.style.color = "#121212";
    });
    folder.addEventListener("mouseenter", function () {
      if (chk.checked == true) {
        folder.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    folder.addEventListener("mouseleave", function () {
      folder.style.color = "#121212";
    });
    info.addEventListener("mouseenter", function () {
      if (chk.checked == true) {
        info.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    info.addEventListener("mouseleave", function () {
      info.style.color = "#121212";
    });
    contact.addEventListener("mouseenter", function () {
      if (chk.checked == true) {
        contact.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    contact.addEventListener("mouseleave", function () {
      contact.style.color = "#121212";
    });
    label.style.background = "#fff";
    dash.style.background = "#fff";
    spacecontatos.style.background = "#fff";
    recenteprojeto.style.background = "#fff";
    menu.style.color = "#121212";
    folder.style.color = "#121212";
    info.style.color = "#121212";
    contact.style.color = "#121212";
    ball.style.background = "#121212";
    moon.style.color = "#121212";
    subtext.style.color = "#121212";
    subtext.style.background = "#ffff";
  } else if (chk.checked == false) {
    var dash = window.document.querySelector("nav#menu");
    var menu = window.document.querySelector("i.gg-home-alt");
    var folder = window.document.querySelector("i.gg-folder");
    var info = window.document.querySelector("i.gg-clipboard");
    var contact = window.document.querySelector("i.gg-voicemail");
    var label = window.document.querySelector("label.label");
    var ball = window.document.querySelector("div.ball");
    var subtext = window.document.querySelector("h2.sub-text");
    var spacecontatos = window.document.querySelector("div.contatos");
    var recenteprojeto = window.document.querySelector("div.projetorecente");
    menu.style.color = "white";
    folder.style.color = "white";
    info.style.color = "white";
    contact.style.color = "white";
    menu.addEventListener("mouseenter", function () {
      if (chk.checked == false) {
        menu.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    menu.addEventListener("mouseleave", function () {
      menu.style.color = "#ffff";
    });
    folder.addEventListener("mouseenter", function () {
      if (chk.checked == false) {
        folder.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    folder.addEventListener("mouseleave", function () {
      folder.style.color = "#ffff";
    });
    info.addEventListener("mouseenter", function () {
      if (chk.checked == false) {
        info.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    info.addEventListener("mouseleave", function () {
      info.style.color = "#ffff";
    });
    contact.addEventListener("mouseenter", function () {
      if (chk.checked == false) {
        contact.style.color = "rgba(3, 255, 159, 0.932)";
      }
    });
    contact.addEventListener("mouseleave", function () {
      contact.style.color = "#ffff";
    });
    dash.style.background = "#121212";
    label.style.background = "#121212";
    ball.style.background = "#ffff";
    spacecontatos.style.background = "#121212";
    recenteprojeto.style.background = "#121212";
    subtext.style.color = "#ffff";
  }
});

/* Configuação do modo light e dark */
/* Configuração de Velocidade ao Video */



/* Animação de Aparecer e Desaparecer */
var label2 = document.querySelector("#label2");
var home = document.querySelector("#main");
var label1 = document.querySelector("#label1");
var retorno = document.querySelector("#return");
var ERion = document.querySelector(".Erion");
var WhatIf = document.querySelector('.WhatIf');
var ActivateErion = document.querySelector(".botao");
var Projetos = document.querySelector("#projetos");
var SobreMim = document.querySelector('#sobremim');
var label3 = document.querySelector('#label3');
var perfil = document.querySelector('.perfil');
var botao2 = document.querySelector('.botao2');
var contato = document.querySelector('#contato');
var label4 = document.querySelector('#label4');
var botaoerion = document.querySelector('#transfererion');
var retornowhatif = document.querySelector('#return_whatif');
var transferwhatif = document.querySelector('#transferwhatif');
var whatif2 = document.querySelector('#whatif2');
var erion = document.querySelector('#erion2');
var returnbicik = document.querySelector('#return_bicik');
var Bicik = document.querySelector('.Bicik');
var transferbicik = document.querySelector('#transferbicik');
var bicik2 = document.querySelector('#bicik2');

label2.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "block";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
});
label1.addEventListener("click", function Home() {
  home.style.display = "block";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
});
label3.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "flex";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
});
retorno.addEventListener("click", function () {
  home.style.display = "flex";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
});
ActivateErion.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "flex";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
});
perfil.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "flex";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
botao2.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "flex";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
label4.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "flex";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
botaoerion.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "flex";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
retornowhatif.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "flex";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
transferwhatif.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "flex";
  Bicik.style.display = "none";
})
whatif2.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "flex";
  Bicik.style.display = "none";
})
erion.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "flex";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
returnbicik.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "flex";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "none";
})
transferbicik.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "flex";
})
bicik2.addEventListener("click", function () {
  home.style.display = "none";
  ERion.style.display = "none";
  Projetos.style.display = "none";
  SobreMim.style.display = "none";
  contato.style.display  = "none";
  WhatIf.style.display = "none";
  Bicik.style.display = "flex";
})
/*Função separada para cores dos icones */

chk.addEventListener("change", function IConesCores() {
  var linkedin = window.document.querySelector("#linkedin");
  var whatsapp = window.document.querySelector("#whatsapp");
  var github = window.document.querySelector("#github");
  var instagram = window.document.querySelector("#instagram");
  let WhatIF = window.document.querySelector('.WhatIf');
  let EriOn = window.document.querySelector('.Erion');
  let Bicik = window.document.querySelector('.Bicik');
  if (chk.checked == true) {
    linkedin.style.color = "#121212";
    whatsapp.style.color = "#121212";
    github.style.color = "#121212";
    instagram.style.color = "#121212";
    WhatIF.style.background = "rgba(255, 255, 255, 0.2)";
    EriOn.style.background = "rgba(255, 255, 255, 0.2)";
    Bicik.style.background = "rgba(255, 255, 255, 0.2)";
    linkedin.addEventListener("mouseenter", function () {
      linkedin.style.color = "rgba(3, 255, 159, 0.932)";
    });
    linkedin.addEventListener("mouseleave", function () {
      linkedin.style.color = "#121212";
    });
    whatsapp.addEventListener("mouseenter", function () {
      whatsapp.style.color = "rgba(3, 255, 159, 0.932)";
    });
    whatsapp.addEventListener("mouseleave", function () {
      whatsapp.style.color = "#121212";
    });
    github.addEventListener("mouseenter", function () {
      github.style.color = "rgba(3, 255, 159, 0.932)";
    });
    github.addEventListener("mouseleave", function () {
      github.style.color = "#121212";
    });
    instagram.addEventListener("mouseenter", function () {
      instagram.style.color = "rgba(3, 255, 159, 0.932)";
    });
    instagram.addEventListener("mouseleave", function () {
      instagram.style.color = "#121212";
    });
  }
  if (chk.checked == false) {
    linkedin.style.color = "#ffff";
    whatsapp.style.color = "#ffff";
    github.style.color = "#ffff";
    instagram.style.color = "#ffff";
    linkedin.addEventListener("mouseleave", function () {
      linkedin.style.color = "#ffff";
    });
    whatsapp.addEventListener("mouseleave", function () {
      whatsapp.style.color = "#ffff";
    });
    github.addEventListener("mouseleave", function () {
      github.style.color = "#ffff";
    });
    instagram.addEventListener("mouseleave", function () {
      instagram.style.color = "#ffff";
    });
    WhatIF.style.background = "rgba(18, 18, 18, 0.2)";
    EriOn.style.background = "rgba(18, 18, 18, 0.2)";
    Bicik.style.background = "rgba(18, 18, 18, 0.2)";
  }
});

chk.addEventListener("change", function TextoCor() {
  let texto1 = window.document.querySelector("#projetotexto");
  let texto2 = window.document.querySelector("#projeto-texto-sub");
  let botao = window.document.querySelector(".botao");
  let novidades = window.document.querySelector(".welcome");
  let novidade1 = window.document.querySelector("#novidades-texto");
  let novidade2 = window.document.querySelector("#novidades-subtexto");
  let botao2 = window.document.querySelector(".botao2");
  let projeto1 = window.document.querySelector(".projeto1");
  let projeto2 = window.document.querySelector(".projeto2");
  let projeto3 = window.document.querySelector(".projeto3");
  let linguagem = window.document.querySelector(".texto");
  let linguagem2 = window.document.querySelector("#prj2");
  let linguagem3 = window.document.querySelector("#prj3");
  let unit = window.document.querySelector("#unity");
  let unit2 = window.document.querySelector("#unity2");
  let unit3 = window.document.querySelector("#unity3");
  let python = document.querySelector("#python");
  let csharp = window.document.querySelector(".csharp");
  let html = window.document.querySelector("#html");
  let textos = window.document.querySelector("h2.infos");
  let info2 = window.document.querySelector("#info2");
  let info3 = window.document.querySelector("#info3");
  let whatiftroca = window.document.querySelector("#transferwhatif");
  let biciktroca = window.document.querySelector("#transferbicik");
  let eriontroca = window.document.querySelector("#transfererion");
  if (chk.checked == true) {
    botao.style.color = "#FFFF";
    botao.style.background = "#121212";
    botao2.style.color = "#FFFF";
    botao2.style.background = "#121212";
    whatiftroca.style.background = "#121212";
    whatiftroca.style.color = "#FFFF";
    biciktroca.style.background = "#121212";
    biciktroca.style.color = "#FFFF";
    eriontroca.style.background = "#121212";
    eriontroca.style.color = "#FFFF";
    whatiftroca.addEventListener("mouseenter", function () {
      whatiftroca.style.background = "rgba(3, 255, 159, 0.932)";
    });
    whatiftroca.addEventListener("mouseleave", function () {
      whatiftroca.style.background = "#121212";
    });
    botao.addEventListener("mouseenter", function () {
      botao.style.background = "rgba(3, 255, 159, 0.932)";
    });
    botao.addEventListener("mouseleave", function () {
      botao.style.background = "#121212";
    });
    botao2.addEventListener("mouseenter", function () {
      botao2.style.background = "rgba(3, 255, 159, 0.932)";
    });
    botao2.addEventListener("mouseleave", function () {
      botao2.style.background = "#121212";
    });
    biciktroca.addEventListener("mouseenter", function () {
      biciktroca.style.background = "rgba(3, 255, 159, 0.932)";
    });
    biciktroca.addEventListener("mouseleave", function () {
      biciktroca.style.background = "#121212";
    });
    eriontroca.addEventListener("mouseenter", function () {
      eriontroca.style.background = "rgba(3, 255, 159, 0.932)";
    });
    eriontroca.addEventListener("mouseleave", function () {
      eriontroca.style.background = "#121212";
    });
    texto1.style.color = "#121212";
    texto2.style.color = "#121212";
    novidade1.style.color = "#121212";
    novidades.style.background = "#FFFF";
    novidade2.style.color = "#121212";
    projeto1.style.background = "#FFFF";
    projeto2.style.background = "#FFFF";
    projeto3.style.background = "#FFFF";
    linguagem.style.color = "#121212";
    linguagem2.style.color = "#121212";
    linguagem3.style.color = "#121212";
    unit.style.color = "#121212";
    unit2.style.color = "#121212";
    unit3.style.color = "#121212";
    csharp.style.color = "#121212";
    python.style.color = "#121212";
    html.style.color = "#121212";
    textos.style.color = "#121212";
    info2.style.color = "#121212";
    info3.style.color = "#121212";
  } else {
    let eriontroca = window.document.querySelector("#transfererion");
    botao.style.color = "#121212";
    botao.style.background = "#FFFF";
    botao2.style.color = "#121212";
    botao2.style.background = "#FFFF";
    texto1.style.color = "#FFFF";
    texto2.style.color = "#FFFF";
    novidade1.style.color = "#FFFF";
    projeto1.style.background = "#121212";
    projeto2.style.background = "#121212";
    projeto3.style.background = "#121212";
    whatiftroca.style.color = "#121212";
    whatiftroca.style.background = "#FFFF";
    eriontroca.style.color = "#121212";
    eriontroca.style.background = "#FFFF";
    biciktroca.style.color = "#121212";
    biciktroca.style.background = "#FFFF";
    eriontroca.style.color = "#121212";
    eriontroca.style.background = "#FFFF";
    linguagem.style.color = "#121212";
    botao.addEventListener("mouseleave", function () {
      botao.style.background = "#FFFF";
    });
    botao2.addEventListener("mouseleave", function () {
      botao2.style.background = "#FFFF";
    });
    whatiftroca.addEventListener("mouseleave", function () {
      whatiftroca.style.background = "#FFFF";
    });
    biciktroca.addEventListener("mouseleave", function () {
      biciktroca.style.background = "#FFFF";
    });
    eriontroca.addEventListener("mouseleave", function () {
      eriontroca.style.background = "#FFFF";
    });
    novidades.style.background = "#121212";
    novidade2.style.color = "#FFFF";
    linguagem.style.color = "#FFFF";
    linguagem2.style.color = "#FFFF";
    linguagem3.style.color = "#FFFF";
    unit.style.color = "#FFFF";
    unit2.style.color = "#FFFF";
    unit3.style.color = "#FFFF";
    csharp.style.color = "#FFFF";
    python.style.color = "#FFFF";
    html.style.color = "#FFFF";
    info2.style.color = "#FFFF";
    textos.style.color = "#FFFF";
    info3.style.color = "#FFFF";
  }
});

chk.addEventListener("change", function Sobre() {
  let base = window.document.querySelector('.dados');
  let texto3 = window.document.querySelector('.tecnologias');
  let texto4 = window.document.querySelector('#text4');
  let html2 = window.document.querySelector('#html2');
  let css2 = window.document.querySelector('#css2');
  let javascript2 = window.document.querySelector('#javascript2');
  let python2 = window.document.querySelector('#python2');
  let react2 = window.document.querySelector('#react');
  let java = window.document.querySelector('#edit3');
  let sql = window.document.querySelector('#bgdado');
  let cmais = window.document.querySelector('.cmais');
  let btn = window.document.querySelector('.btn');
  let logo = window.document.querySelector('.logos');
  let academicotexto = window.document.querySelector('.academicotexto');
  let sobremimnovo = window.document.querySelector('.base');
  let t1 = window.document.querySelector('#t1');
  let t2 = window.document.querySelector('#t2');
  let t3 = window.document.querySelector('#t3');
  let t4 = window.document.querySelector('#t4');
  let textofinal = window.document.querySelector('.finaltexto');
  let titulo = window.document.querySelector('.titulo');
  let texto6 = window.document.querySelector('.texto6');
  let logoinfo = window.document.querySelector('.logo-info');
  let etec = document.querySelector('#etec');
  let fiap = document.querySelector('#fiap');
  let unip = document.querySelector('#unip');
  let senai = document.querySelector('#senai');
  let formulario = document.querySelector('.formulario');
  let tituloformulario = document.querySelector('#tituloformulario');
  let botaoformulario = document.querySelector('#enviar');
  let email = document.querySelector('#email');
  let nome = document.querySelector('#nome');
  let areadotexto = document.querySelector('#areadotexto');
  let encerrando = document.querySelector('.encerrando');
  let encerrandotexto = document.querySelector('.encerrandotexto');
  let email2 = document.querySelector('#emailogo');
  let whatsapp2 = document.querySelector('#whatsapp2');
  let instagram2 = document.querySelector('#instagram2');
  let linkedin2 = document.querySelector('#linkedin2');
  let github2 = document.querySelector('#github2');
  let subtituloformulario = document.querySelector('#subtituloformulario');

  if(chk.checked == true){
    base.style.background = "rgba(255, 255, 255, 0.2)";
    texto3.style.color = '#121212';
    texto4.style.color = '#121212';
    html2.style.color = '#121212';
    css2.style.color = '#121212';
    python2.style.color = '#121212';
    javascript2.style.color = '#121212';
    react2.style.color = '#121212';
    java.style.color = '#121212';
    sql.src = '/imgs/dark.png';
    cmais.style.color = '#121212';
    btn.style.background = '#121212';
    btn.style.color = '#FFFF';
    logo.style.background = '#FFFF';
    academicotexto.style.color = '#121212';
    sobremimnovo.style.background = '#FFFF';
    t1.style.color = '#121212';
    t2.style.color = '#121212';
    t3.style.color = '#121212';
    t4.style.color = '#121212';
    textofinal.style.background = '#FFFF';
    texto6.style.color = '#121212';
    titulo.style.color = '#121212';
    logoinfo.style.color = '#121212';
    formulario.style.background = '#FFFF';
    tituloformulario.style.color = '#121212';
    botaoformulario.style.color = '#FFFF';
    botaoformulario.style.background = '#121212';
    email.style.border = '1px solid #121212';
    nome.style.border = '1px solid #121212';
    areadotexto.style.border = '1px solid #121212';
    encerrando.style.background = '#FFFF';
    encerrandotexto.style.color = '#121212';
    email2.style.color = '#121212';
    whatsapp2.style.color = '#121212';
    instagram2.style.color = '#121212';
    linkedin2.style.color = '#121212';
    github2.style.color = '#121212';
    subtituloformulario.style.color = '#121212';
    btn.addEventListener('mouseenter', function () {
      btn.style.background = 'rgba(3, 255, 159, 0.932)';
    })
    btn.addEventListener('mouseleave', function () {
      btn.style.background = '#121212';
    })
    botaoformulario.addEventListener('mouseenter', function (){
      botaoformulario.style.background = 'rgba(3, 255, 159, 0.932)';
    })
    botaoformulario.addEventListener('mouseleave', function (){
      botaoformulario.style.background = '#121212';
    })
    base.addEventListener('mouseenter', function (){
      base.style.background = 'rgba(255, 255, 255, 0.7)';
    })
    base.addEventListener('mouseleave', function (){
      base.style.background = 'rgba(255, 255, 255, 0.2)';
    })
    etec.src = '/imgs/etecdark.png';
    senai.src = '/imgs/senaidark.png';
    unip.src = '/imgs/unipdark.png';
    fiap.src = '/imgs/fiapdark.png';
  }
  else{
    let btn = window.document.querySelector('.btn');
    base.style.background = "rgba(18, 18, 18, 0.2)";
    texto3.style.color = '#FFFF';
    texto4.style.color = '#FFFF';
    html2.style.color = '#FFFF';
    css2.style.color = '#FFFF';
    python2.style.color = '#FFFF';
    javascript2.style.color = '#FFFF';
    react2.style.color = '#FFFF';
    java.style.color = '#FFFF';
    sql.src = '/imgs/bgdadoslogo.png';
    cmais.style.color = '#FFFF';
    btn.style.background = '#FFFF';
    logo.style.background = '#121212';
    btn.style.color = '#121212';
    academicotexto.style.color = '#FFFF';
    sobremimnovo.style.background = '#121212';
    t1.style.color = '#FFFF';
    t2.style.color = '#FFFF';
    t3.style.color = '#FFFF';
    t4.style.color = '#FFFF';
    textofinal.style.background = '#121212';
    titulo.style.color = '#FFFF';
    texto6.style.color = '#FFFF';
    logoinfo.style.color = '#FFFF';
    formulario.style.background = '#121212';
    tituloformulario.style.color = '#FFFF';
    botaoformulario.style.color = '#121212';
    botaoformulario.style.background = '#FFFF';
    encerrando.style.background = '#121212';
    encerrandotexto.style.color = '#FFFF';
    email2.style.color = '#FFFF';
    whatsapp2.style.color = '#FFFF';
    instagram2.style.color = '#FFFF';
    linkedin2.style.color = '#FFFF';
    github2.style.color = '#FFFF';
    subtituloformulario.style.color = '#FFFF';
    btn.addEventListener('mouseenter', function () {
      btn.style.background = 'rgba(3, 255, 159, 0.932)';
    })
    btn.addEventListener('mouseleave', function () {
      btn.style.background = '#FFFF';
    })
    botaoformulario.addEventListener('mouseenter', function (){
      botaoformulario.style.background = 'rgba(3, 255, 159, 0.932)';
    });
    botaoformulario.addEventListener('mouseleave', function (){
      botaoformulario.style.background = '#FFFF';
    });
    base.addEventListener('mouseenter', function (){
      base.style.background = 'rgba(18, 18, 18, 0.7)';
    })
    base.addEventListener('mouseleave', function (){
      base.style.background = 'rgba(18, 18, 18, 0.2)';
    })
    etec.src = '/imgs/etec.png';
    senai.src = '/imgs/SENAI_branca.png';
    unip.src = '/imgs/unip.png';
    fiap.src = '/imgs/FIAP-WHITE-1.png';
  }
});

$('.slide-show').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slide-show',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


chk.addEventListener("change", function IConesCores() {
  let sass = window.document.querySelector('#sass');
  let git = window.document.querySelector('#git');
  let next = window.document.querySelector('#nextjs');
  let projeto4 = window.document.querySelector('.projeto4');
  let text4 = window.document.querySelector('#prj4');
  let rect2 = window.document.querySelector('#react3');
  let sass2 = window.document.querySelector('#sass2');
  let nextjs = window.document.querySelector('#nextjs2');
  let prisma = window.document.querySelector('#prisma');
  let info4 = window.document.querySelector('#info4');
  let button4 = window.document.querySelector('#transferangels');
  if (chk.checked === true){
    projeto4.style.background = '#FFFF'; 
    sass.style.color = '#121212';
    git.style.color = '#121212';
    next.src = '/imgs/nextjs-icon.png';
    text4.style.color = '#121212';
    rect2.style.color = '#121212';
    sass2.style.color = '#121212';
    nextjs.src = '/imgs/nextjs-icon.png';
    prisma.src = '/imgs/prisma-black.png';
    info4.style.color = '#121212';
    button4.style.color = '#FFFF';
    button4.style.background = '#121212';
  }
  else {
    sass.style.color = '#FFFF';
    git.style.color = '#FFFF';
    next.src = '/imgs/AM/nextjs-icon-white.png';
    projeto4.style.background = '#121212';
    text4.style.color = '#FFFF';
    rect2.style.color = '#FFFF';
    sass2.style.color = '#FFFF';
    nextjs.src = '/imgs/AM//nextjs-icon-white.png';
    prisma.src = '/imgs/prisma-white.png';
    info4.style.color = '#FFFF';
    button4.style.color = '#121212';
    button4.style.background = '#FFFF';
  }
})
