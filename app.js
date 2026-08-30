const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];

const header = $("#siteHeader");
const menuBtn = $("#menuBtn");
const nav = $("#mainNav");

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>24);
});

menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})
},{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

// Subtle 3D hero interaction
const heroVisual = $("#heroVisual");
const dash = $(".dashboard-shell");
if(window.matchMedia("(pointer:fine)").matches){
  heroVisual.addEventListener("mousemove",e=>{
    const r=heroVisual.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    dash.style.transform=`rotateY(${(-5+x*5).toFixed(2)}deg) rotateX(${(2-y*4).toFixed(2)}deg) rotateZ(.4deg) translate3d(${x*5}px,${y*5}px,0)`;
  });
  heroVisual.addEventListener("mouseleave",()=>dash.style.transform="rotateY(-5deg) rotateX(2deg) rotateZ(.4deg)");
}

// How it works tabs
const steps = {
  1:{
    title:"Scannez le QR code de l'équipement.",
    text:"Pas de recherche complexe ni de navigation interminable. Le technicien ou le responsable de site arrive directement sur la bonne fiche.",
    list:["Identification immédiate de l'actif","Accès adapté au rôle de l'utilisateur","Historique et documents disponibles"]
  },
  2:{
    title:"Signalez le problème en moins d'une minute.",
    text:"Description, photo et niveau d'urgence sont immédiatement rattachés au bon équipement et horodatés.",
    list:["Création automatique du ticket","Numérotation et priorité","Notification du responsable maintenance"]
  },
  3:{
    title:"Transformez le ticket en intervention tracée.",
    text:"Le responsable affecte l'ordre de travail. Le technicien documente le diagnostic, le temps passé, les pièces, les photos et les compteurs.",
    list:["Planning du jour","Fonctionnement hors ligne","Clôture d'intervention documentée"]
  },
  4:{
    title:"L'historique devient une donnée de pilotage.",
    text:"Chaque action alimente automatiquement le coût, le TCO, l'historique et la prochaine échéance de maintenance.",
    list:["Coûts par actif et par site","Historique complet de l'équipement","Décisions de remplacement objectivées"]
  }
};
function setStep(n){
  const d=steps[n];
  $$(".how-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.step==n));
  $("#stepNumber").textContent=`0${n}`;
  $("#stepTitle").textContent=d.title;
  $("#stepText").textContent=d.text;
  $("#stepList").innerHTML=d.list.map(x=>`<li><svg><use href="#i-check"/></svg>${x}</li>`).join("");
  $$(".step-screen").forEach(s=>s.classList.toggle("active",s.classList.contains(`step-${n}`)));
}
$$(".how-tabs button").forEach(b=>b.addEventListener("click",()=>setStep(+b.dataset.step)));

// Persona tabs
const personas = {
  direction:{
    kicker:"DIRECTION GÉNÉRALE",
    title:"Pilotez le parc au lieu de subir les coûts.",
    text:"Une lecture consolidée de la disponibilité, des coûts, des dérives et des équipements qui commencent à coûter trop cher.",
    list:["Disponibilité globale du parc","Coûts par site, catégorie et fournisseur","TCO et top équipements coûteux"],
    label:"Vue Direction"
  },
  maintenance:{
    kicker:"RESPONSABLE MAINTENANCE",
    title:"Planifiez, affectez et gardez la maîtrise.",
    text:"Un espace unique pour piloter les maintenances préventives, affecter les interventions et suivre les délais.",
    list:["Plans de maintenance automatisés","Ordres de travail et affectations","Suivi des maintenances en retard"],
    label:"Vue Maintenance"
  },
  technicien:{
    kicker:"TECHNICIEN",
    title:"Un outil terrain qui va droit au but.",
    text:"Planning du jour, scan QR, diagnostic, photos, compteurs et clôture d'intervention — même hors connexion.",
    list:["Application mobile offline-first","Diagnostic et photos d'intervention","Synchronisation automatique"],
    label:"Vue Technicien"
  },
  site:{
    kicker:"RESPONSABLE DE SITE",
    title:"Signalez un problème en 30 secondes.",
    text:"Un scan, une description et éventuellement une photo. Le ticket arrive au bon interlocuteur et son statut reste visible.",
    list:["Signalement QR simplifié","Suivi du statut du ticket","Aucune expertise technique requise"],
    label:"Vue Site"
  },
  magasin:{
    kicker:"MAGASINIER",
    title:"Les pièces consommées cessent de disparaître.",
    text:"Chaque mouvement est lié à une intervention. Les seuils permettent d'anticiper les ruptures avant qu'elles bloquent le terrain.",
    list:["Catalogue et emplacements","Seuils de réapprovisionnement","Consommation par équipement"],
    label:"Vue Stock"
  }
};
function setPersona(key){
  const p=personas[key];
  $$(".persona-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.persona===key));
  $("#personaKicker").textContent=p.kicker;
  $("#personaTitle").textContent=p.title;
  $("#personaText").textContent=p.text;
  $("#personaList").innerHTML=p.list.map(x=>`<li><svg><use href="#i-check"/></svg>${x}</li>`).join("");
  $("#pdLabel").textContent=p.label;
}
$$(".persona-tabs button").forEach(b=>b.addEventListener("click",()=>setPersona(b.dataset.persona)));

// FAQ accordion
$$(".faq-item button").forEach(btn=>btn.addEventListener("click",()=>{
  const item=btn.closest(".faq-item");
  const wasOpen=item.classList.contains("open");
  $$(".faq-item").forEach(i=>{
    i.classList.remove("open");
    const use=$("use",i);
    if(use) use.setAttribute("href","#i-plus");
  });
  if(!wasOpen){
    item.classList.add("open");
    $("use",item).setAttribute("href","#i-minus");
  }
}));

// Demo modal
const modal=$("#demoModal");
function openDemo(){modal.classList.add("open");document.body.classList.add("lock")}
function closeDemo(){modal.classList.remove("open");document.body.classList.remove("lock")}
$("#openDemo").addEventListener("click",openDemo);
$("#closeDemo").addEventListener("click",closeDemo);
$(".demo-backdrop").addEventListener("click",closeDemo);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDemo()});

$$(".demo-steps button").forEach(b=>b.addEventListener("click",()=>{
  $$(".demo-steps button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  $$(".demo-scene").forEach(s=>s.classList.remove("active"));
  $(`#demo-${b.dataset.demo}`).classList.add("active");
}));

// Form demo
$("#pilotForm").addEventListener("submit",e=>{
  e.preventDefault();
  const toast=$("#toast");
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),3500);
  e.currentTarget.reset();
});

// Magnetic CTA, small tasteful motion
if(window.matchMedia("(pointer:fine)").matches){
  $$(".magnetic").forEach(btn=>{
    btn.addEventListener("mousemove",e=>{
      const r=btn.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
      btn.style.transform=`translate(${x*.08}px,${y*.12}px) translateY(-2px)`;
    });
    btn.addEventListener("mouseleave",()=>btn.style.transform="");
  });
}
