# Banco de pruebas de lenguajes

Este documento sirve para comprobar cómo ||markdown‑it|| maneja bloques de código en diferentes lenguajes para su uso en Lingüísticas.

## JavaScript

```js
// Interface con genérico
interface Repository<T> {
  getById(id: number): Promise<T | null>;
  save(entity: T): Promise<void>;
}

// Clase con decorador
function LogClass(target: Function) {
  console.log(`Clase registrada: ${target.name}`);
}

@LogClass
class Usuario {
  constructor(public id: number, public nombre: string) {}
}

// Implementación concreta
class UsuarioRepo implements Repository<Usuario> {
  private store: Map<number, Usuario> = new Map();

  async getById(id: number): Promise<Usuario | null> {
    return this.store.get(id) ?? null;
  }

  async save(entity: Usuario): Promise<void> {
    this.store.set(entity.id, entity);
  }
}

// Función con type narrowing
function imprimir(valor: string | number) {
  if (typeof valor === "string") {
    console.log("Texto:", valor.toUpperCase());
  } else {
    console.log("Número:", valor.toFixed(2));
  }
}

// Uso asíncrono
(async () => {
  const repo = new UsuarioRepo();
  await repo.save(new Usuario(1, "Raúl"));
  const u = await repo.getById(1);
  if (u) imprimir(u.nombre);
})();
```

## C++
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hola mundo en C++" << endl;
    return 0;
}
```

## XML
```xml
<mensaje>
  <texto>Hola mundo en XML</texto>
</mensaje>
```

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
BEGIN TRANSACTION;

BEGIN TRY
    -- Crear tabla temporal
    CREATE TABLE #TempUsuarios (
        Id INT PRIMARY KEY,
        Nombre NVARCHAR(50),
        Correo NVARCHAR(100)
    );

    -- Insertar registros
    INSERT INTO #TempUsuarios (Id, Nombre, Correo)
    VALUES (1, 'Raúl', 'raul@example.com'),
           (2, 'María', 'maria@example.com');

    -- Actualizar un registro
    UPDATE #TempUsuarios
    SET Correo = 'nuevo_correo@example.com'
    WHERE Id = 1;

    -- Verificar número de filas afectadas
    IF @@ROWCOUNT = 0
    BEGIN
        RAISERROR('No se actualizó ningún registro.', 16, 1);
    END

    -- Confirmar transacción
    COMMIT TRANSACTION;
    PRINT 'Transacción completada con éxito.';

END TRY
BEGIN CATCH
    -- Mostrar información del error
    PRINT 'Error detectado:';
    PRINT ERROR_MESSAGE();

    -- Revertir transacción
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;

    PRINT 'Transacción revertida.';
END CATCH;
```

## PHP
Este ejemplo demuestra cómo se pueden manipular cadenas de texto en PHP usando diferentes técnicas.

```php
<?php
// Concatenación simple
$nombre = "Raúl";
$saludo = "Hola, " . $nombre . "! Bienvenido al Atlas.";
echo $saludo;

// Interpolación dentro de comillas dobles
$edad = 30;
echo "El usuario $nombre tiene $edad años.";

// Heredoc: útil para bloques largos
$texto = <<<EOT
Este es un bloque de texto
que puede contener variables como $nombre
y saltos de línea sin necesidad de concatenar.
EOT;

echo $texto;

// Nowdoc: similar a heredoc pero sin interpolación
$codigo = <<<'CODE'
<?php
echo "Esto es un ejemplo de código incrustado.";
?>
CODE;

echo $codigo;

// Funciones de cadenas
$cadena = "Lingüísticas";
echo strtoupper($cadena); // LINGÜÍSTICAS
echo mb_substr($cadena, 0, 5); // Lingü

// Comparación segura
if (strcmp("casa", "caso") !== 0) {
    echo "Las palabras son diferentes.";
}
?>
```

## C#
```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hola mundo en C#");
    }
}
```

Este archivo demuestra cómo se pueden usar bloques con tres backticks para resaltar sintaxis en distintos lenguajes.

代码

---
