# Lista de Tarefas (To-Do List)

Projeto básico de uma lista de tarefas com **frontend em React**, **backend em C#** e **banco de dados PostgreSQL**.

---

## Estrutura do Projeto

```
ToDoList
=> Pagina.jsx              <-> Frontend (React)
=> Back.cs                 <-> Backend (C#)
=> db_postgres.session.sql <-> Banco de Dados (PostgreSQL)
=> README.md               <-> Este arquivo
```

---

## Frontend - Pagina.jsx

Arquivo React que monta a interface visual da lista de tarefas.

### Explicação linha a linha

```jsx
import React, { useState } from 'react';
```
Importa o React e o hook `useState` (usado para gerenciar estados no componente).

---

```jsx
const Page = () => {}
```
Declara o componente funcional chamado `Pagina`.

---

```jsx
const [tasks, setTasks] = useState([]);
```
Cria um estado chamado `tarefas` que começa como um array vazio `[]`.
- `tarefas`: guarda a lista de tarefas
- `setTarefas`: função usada para atualizar essa lista

---

```jsx
const [txt, setTxt] = useState('');
```
Cria outro estado chamado `texto` que começa como string vazia `''`.
- `texto`: guarda o que o usuário está digitando
- `setTexto`: função para atualizar esse valor

---

```jsx
function handleAdd(e) {
    if (e.key === 'Enter' && txt.trim()) };
```
Função que verifica se o usuário apertou **Enter** e se o campo tem texto (ignorando espaços).

---

```jsx
const brandnew = { id: Date.now(), txt: txt, done: false };
```
Cria um objeto representando uma nova tarefa:
- `id`: número único baseado no tempo atual
- `texto`: o que o usuário digitou
- `feita`: começa como `false` (não concluída)

---

```jsx
setTasks([...tasks, brandnew]);
```
Adiciona a nova tarefa na lista usando o spread operator `...` para manter as tarefas existentes.

---

```jsx
setTxt('');
```
Limpa o campo de texto após adicionar a tarefa.

---

```jsx
function remove(id) {
    setTasks(tasks.filter(t => t.id !== id));
}
```
Remove uma tarefa pelo ID:
- `filter`: cria um novo array só com tarefas cujo ID é **diferente** do passado

---

```jsx
function toggle(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
}
```
Alterna o status de uma tarefa:
- `map`: percorre todas as tarefas
- Se o ID bater, inverte `feita` (`true` vira `false` e vice-versa)
- Se não, mantém igual

---

```jsx
<input
    value={txt}
    onChange={e => setTxt(e.target.value)}
    onKeyPress={handleAdd}
    placeholder="Nova tarefa..."
/>
```
Campo de texto controlado:
- `value`: valor vem do estado `texto`
- `onChange`: atualiza estado a cada tecla digitada
- `onKeyPress`: chama `handleAdd` ao pressionar uma tecla

---

```jsx
{tasks.map(t => ())}
    <li key={t.id} ...>
```
Renderiza cada tarefa da lista como um item `<li>`:
- `key`: obrigatório no React para identificar cada elemento único

---

```jsx
<input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
```
Checkbox que reflete o status da tarefa e chama `toggle` ao ser clicado.

---

```jsx
<span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
    {t.txt}
</span>
```
Mostra o texto da tarefa. Se estiver feita, aplica um risco no meio (`line-through`).

---

```jsx
<button onClick={() => remove(t.id)}>X</button>
```
Botão que remove a tarefa quando clicado.

---

## Backend - Back.cs

Arquivo C# que gerencia a lógica da lista de tarefas.

### Explicação linha a linha

```csharp
using System;
using Collections.Generic;
```
Importa namespaces necessários:
- `System`: funções básicas como `Console` e `DateTime`
- `Collections.Generic`: listas (`List<T>`)

---

```csharp
public class Back : IMenu
    {
        public void Display()
        {
            Console.WriteLine("Voltando para o menu anterior..."); //Volta para o menu anterior
        }
    `};


```csharp
    public void Execute()
        {
           //Implementarei Funções 
        }





## Banco de Dados - db_postgres.session.sql

Arquivo SQL que cria a tabela para persistir as tarefas no PostgreSQL.

### Explicação linha a linha

```sql
-- Cria a tabela de tarefas no banco de dados
```
Comentário que descreve o que o código faz.

---

```sql
CREATE TABLE tasks ('');
```
Cria uma nova tabela chamada `tarefas` no banco.

---

```sql
    id BIGSERIAL PRIMARY KEY,
```
Campo `id`:
- `BIGSERIAL`: número inteiro com auto-incremento (começa em 1, vai até 9 quintilhões)
- `PRIMARY KEY`: identificador único, não pode repetir nem ser nulo
- O PostgreSQL gera o próximo ID automaticamente a cada `INSERT`

---

```sql
    txt VARCHAR(255) NOT NULL,
```
Campo `texto`:
- `VARCHAR(255)`: texto com máximo de 255 caracteres
- `NOT NULL`: campo obrigatório, não pode ficar vazio

---

```sql
    done BOOLEAN DEFAULT FALSE
```
Campo `feita`:
- `BOOLEAN`: valor verdadeiro ou falso
- `DEFAULT FALSE`: quando não informado, começa como `false` (não concluída)

---



---

## Como Rodar

### Banco de Dados (PostgreSQL)

1. Tenha o PostgreSQL instalado e rodando
2. Acesse o banco: `psql -U seu_usuario -d seu_banco`
3. Execute o script: `\i db_postgres.session.sql`
4. A tabela `tarefas` estará criada e pronta

### Frontend (React)

1. Tenha o Node.js instalado
2. Crie um projeto React: `npx create-react-app frontend`
3. Substitua o conteúdo de `src/App.js` pelo código do `Pagina.jsx`
4. Rode: `npm start`

### Backend (C#)

1. Tenha o .NET SDK instalado
2. Crie um projeto Console: `dotnet new console -n backend`
3. Substitua o conteúdo de `Program.cs` pelo código do `Back.cs`
4. Rode: `dotnet run`

---

## Funcionalidades

- Adicionar tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Interface simples e limpa
- Persistência em banco de dados PostgreSQL
- Implementar ação de deixar a página com as tarefas salvas no Banco de Dados (futuro)
- Melhorar estilização, enriquecer a página (UX, UI), aumentar a gama de opções dessa ToDoList (futuro)
- API REST (futuro)

---

## Tecnologias

| Camada        | Tecnologia        |
|---------------|-------------------|
| Frontend      | React (JSX)       |
| Backend       | C# (.NET)         |
| Banco de Dados| PostgreSQL        |

---

## Licença

Projeto livre para uso e modificação.
