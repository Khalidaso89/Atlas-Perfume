<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROYECTO2</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/styles.css">
</head>

<body>
<header>
        <nav style="border-radius: 20px; background-color: #dce0e3f2;" class="navbar navbar-expand-lg navbar-light ">
            <div class="navbar-brand">
                <a href="/html/perfume.html"><img src="/assets/img/logo.png" id="logo" alt="Logo"></a>
            </div>

            <!-- Título en móvil -->
            <h1 class="titulo-movil d-lg-none mx-auto">Atlas Perfume</h1>

            <!-- Botón para colapsar en dispositivos móviles -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Título y enlaces de navegación -->
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item d-lg-none">
                        <a class="nav-link" href="/html/micesta.html">Mi Cesta</a>
                    </li>
                    <li class="nav-item d-lg-none">
                        <a class="nav-link" href="/html/iniciarsesion.html">Entrar/Registrarse</a>
                    </li>
                    <li class="nav-item d-none d-lg-block"><a class="nav-link" href="/html/micesta.html">Mi Cesta</a>
                    </li>
                    <li class="nav-item d-none d-lg-block"><a class="nav-link"
                            href="/html/iniciarsesion.html">Entrar/Registrarse</a></li>
                </ul>
            </div>

            <!-- Título para escritorio -->
            <h1 class="d-none d-lg-block">Atlas Perfume</h1>

        </nav>
    </header>