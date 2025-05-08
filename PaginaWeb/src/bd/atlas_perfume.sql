
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS atlas_perfume;
USE atlas_perfume;

-- Tabla país
CREATE TABLE IF NOT EXISTS pais (
    id_pais INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla IVA
CREATE TABLE IF NOT EXISTS iva (
    id_iva INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255)
);

-- Tabla Perfume
CREATE TABLE IF NOT EXISTS perfume (
    id_perfume INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    id_pais INT,
    FOREIGN KEY (id_pais) REFERENCES pais(id_pais)
);

-- Tabla stock (stock general por perfume)
CREATE TABLE IF NOT EXISTS stock (
    id_perfume INT PRIMARY KEY,
    stock_actual INT NOT NULL,
    FOREIGN KEY (id_perfume) REFERENCES perfume(id_perfume)
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla Pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(20) NOT NULL,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla cliente
CREATE TABLE IF NOT EXISTS cliente (
    dni VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(50),
    direccion VARCHAR(255),
    id_edad INT,
    FOREIGN KEY (id_edad) REFERENCES pedidos(id_pedido)
    ON DELETE SET NULL ON UPDATE CASCADE
);

-- Tabla Línea de Pedido
CREATE TABLE IF NOT EXISTS linea_pedido (
    id_linea_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unidad DECIMAL(10,2) NOT NULL,
    iva_incluido TINYINT(1) DEFAULT 0,
    iva_aplicado DECIMAL(5,2) DEFAULT 0.00,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
    ON DELETE CASCADE ON UPDATE CASCADE,
);
