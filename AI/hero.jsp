<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Vértice - Apresentação</title>

<link rel="stylesheet" href="<%=request.getContextPath()%>/css/hero.css">

<link rel="shortcut icon"
href="<%=request.getContextPath()%>/Student/Pag/assets/Logo - Vértice.svg"
type="image/x-icon">

</head>

<body>

<nav class="navbar">
<div class="nav-container">

<div class="logo">
<!-- seu SVG continua igual -->
</div>

<div class="nav-links">

<a href="<%=request.getContextPath()%>/loginPage/Teacher-student/loginPA.jsp"
target="_blank"
class="login-link">
Login
</a>

<a href="<%=request.getContextPath()%>/loginPage/signUp.jsp"
target="_blank"
class="btn btn-primary btn-nav">
Cadastro
</a>

</div>
</div>
</nav>


<main class="hero-section">

<div class="hero-container">

<div class="hero-text">

<h1 class="title">

Tudo o que acontece na escola num clique. Para todos que fazem a educação acontecer.

<span class="wave">
<svg xmlns="http://www.w3.org/2000/svg" width="487" height="34" viewBox="0 0 487 34" fill="none">
<path d="M4.00098 30C73.6316 10.3798 266.915 -17.0885 483.001 30"
stroke="#4361EE"
stroke-width="8"
stroke-linecap="round"/>
</svg>
</span>

</h1>

<p class="description">

Centralize notas, observações e relatórios em um ambiente seguro.
Acompanhamento em tempo real para pais e ferramentas de produtividade de ponta para educadores.

</p>

<a href="<%=request.getContextPath()%>/Teacher/pages/home.jsp"
target="_blank"
class="btn btn-primary btn-large">

Acesse o painel

</a>

</div>


<div class="hero-chat">

<h2 class="chat-title">Pergunte sobre nós</h2>

<div class="chat-window">

<div class="message received">
<p>Do Androids Dream of Electric Sheep? is a 1968 dystopian science fiction novel by American writer Philip.</p>
<span class="time">12:25</span>
</div>

<div class="message sent">
<p>https://www.externallink.com</p>
<span class="time">01:25</span>
</div>

<div class="message received">
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<span class="time">02:25</span>
</div>

<div class="message sent short">
<p>O...</p>
<span class="time">01:25</span>
</div>

</div>


<form class="chat-input-box" id="chatForm" method="post">

<button type="button" class="icon-btn clip">
📎
</button>

<input
type="text"
id="messageInput"
name="mensagem"
placeholder="Mande uma mensagem"
class="chat-input"
required
autocomplete="off">

<button type="submit" class="btn-send">
Enviar
</button>

</form>

</div>

</div>

</main>


<div class="fab-profile">

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
viewBox="0 0 24 24" fill="#3A56E4">

<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>

</svg>

<div class="lock-badge">

<svg xmlns="http://www.w3.org/2000/svg"
width="10" height="10" viewBox="0 0 24 24"
fill="#fff">

<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>

</svg>

</div>

</div>

</body>
</html>