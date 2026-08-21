export function slugificar(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Renderiza texto em markdown leve ("## " = título de seção, "- " = item de
 * lista, linha em branco = novo parágrafo) sem depender de biblioteca externa.
 */
export function ConteudoMarkdown({ texto }: { texto: string }) {
  const blocos = texto.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
      {blocos.map((bloco, i) => {
        if (bloco.startsWith('## ')) {
          const titulo = bloco.replace(/^##\s+/, '');
          return (
            <h2 key={i} id={slugificar(titulo)} className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-2 first:mt-0 scroll-mt-28">
              {titulo}
            </h2>
          );
        }
        const linhas = bloco.split('\n').filter(Boolean);
        if (linhas.every(l => l.startsWith('- '))) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-2">
              {linhas.map((l, j) => <li key={j}>{l.replace(/^-\s+/, '')}</li>)}
            </ul>
          );
        }
        return <p key={i}>{bloco}</p>;
      })}
    </div>
  );
}
