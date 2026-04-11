import React, { useState } from 'react';

const Page = () => {
  // Guarda a lista de tarefas
  const [tasks, setTasks] = useState([]);
  // Guarda o texto que o usuário está digitando
  const [txt, setTxt] = useState('');

  // Adiciona uma nova tarefa quando aperta Enter
  function handleAdd(e) {
    // Verifica se apertou Enter e se tem texto
    if (e.key === 'Enter' && txt.trim()) {
      // Cria a tarefa com id único e adiciona na lista
      const brandnew = { id: Date.now(), txt: txt, done: false };
      setTasks([...tasks, brandnew]);
      setTxt(''); // limpa o campo
    }
  }

  // Remove uma tarefa pelo id
  function remove(id) {
    // Filtra mantendo só as diferentes do id passado
    setTasks(tasks.filter(t => t.id !== id));
  }

  // Marca/desmarca uma tarefa como feita
  function toggle(id) {
    // Percorre a lista e inverte o status da tarefa selecionada
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Lista de Tarefas</h1>

      {/* Campo de texto */}
      <input
        value={txt}
        onChange={e => setTxt(e.target.value)} // atualiza estado ao digitar
        onKeyPress={handleAdd} // chama função ao pressionar tecla
        placeholder="Nova tarefa..."
        style={{ padding: 15, marginRight: 15 }}
      />

      {/* Lista de tarefas */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(t => (
          <li key={t.id} style={{ margin: '8px 0', padding: 8, background: t.done ? '#d4edda' : '#f8f9fa' }}>
            {/* Checkbox que marca/desmarca */}
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
            
            {/* Texto da tarefa */}
            <span style={{ marginLeft: 0, textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.txt}
            </span>

            {/* Botão de remover */}
            <button onClick={() => remove(t.id)} style={{ marginLeft: 8 }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;