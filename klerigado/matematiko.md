# Prueba de fórmulas matemáticas

Este documento demuestra los múltiples usos de las fórmulas $\LaTeX$ renderizadas con $\KaTeX$ para su uso en Lingüísticas.

## Álgebra

### Ecuaciones básicas y polinomios:

$$
x^2 + 2x + 1 = (x+1)^2
$$

### Sistemas de ecuaciones:

$$
\begin{cases}
2x + y = 5 \\
x - y = 3
\end{cases}
$$

## Cálculo lambda

Definiciones y aplicaciones:

$$
(\lambda x.\, x + 1)\, 4 = 5
$$

### Composición de funciones:

$$
(\lambda f.\, \lambda x.\, f(f(x)))(\lambda y.\, y^2)(2) = 16
$$

## Cálculo vectorial

### Gradiente y divergencia:

$$
\nabla f(x,y,z) = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right)
$$

Quizá:

$$
\nabla \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}
$$

### Integral de línea:

$$
\int_C \vec{F} \cdot d\vec{r}
$$

## Expresiones menos comunes

### Números complejos:

$$
z = re^{i\theta} = r(\cos \theta + i \sin \theta)
$$

### Teoría de categorías:

$$
\text{Hom}(A,B) \cong \{ f \mid f: A \to B \}
$$

### Notación de lógica modal:

$$
\Box p \rightarrow p, \quad p \rightarrow \Diamond p
$$

## Conclusión

Este archivo sirve como banco de pruebas para verificar que $\KaTeX$ puede manejar desde expresiones elementales hasta notaciones avanzadas de la jerga matemática.
