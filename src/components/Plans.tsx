import FunctionsCard from "./FunctionsCard";

const Plans = () => {
  return (
    <section className="plans" id="planos">
      <h2>Conheça nossos planos</h2>
      <div className="planscontainer">
        <FunctionsCard>
          <h3>Plano Gratuito (Básico)</h3>
          <ul>
            <li>Criação de perfil (paciente ou cuidador).</li>
            <li>Busca básica de cuidadores/pacientes.</li>
            <li>Mensagens limitadas.</li>
            <li>Agendamento de até 2 consultas/mês.</li>
          </ul>
          <p>
            Ideal para: Usuários que querem testar o app ou têm necessidades
            esporádicas.
          </p>
        </FunctionsCard>

        <FunctionsCard>
          <h3>Plano Premium (Paciente) (Assinatura mensal/anual)</h3>
          <ul>
            <li>Agendamento ilimitado de consultas.</li>
            <li>Mensagens ilimitadas com cuidadores.</li>
            <li>Filtros avançados (especialidades, avaliações, proximidade).</li>
            <li>Suporte prioritário.</li>
          </ul>
          <p>
            Ideal para: Pacientes que precisam de cuidados frequentes ou personalizados.
          </p>
        </FunctionsCard>

         <FunctionsCard>
          <h3>Plano Profissional (Cuidador) (Assinatura mensal/anual)</h3>
          <ul>
            <li>Perfil destacado na busca.</li>
            <li>Maior visibilidade para pacientes próximos.</li>
            <li>Possibilidade de oferecer pacotes de serviços.</li>
            <li>Pagamento seguro via app (com taxa reduzida).</li>
          </ul>
          <p>
            Ideal para: Cuidadores que querem aumentar sua clientela e otimizar seu trabalho.
          </p>
        </FunctionsCard>

        <FunctionsCard>
          <h3>Plano Familiar (Assinatura anual)</h3>
          <ul>
            <li>Até 5 perfis vinculados (ex.: idoso + familiares).</li>
            <li>Acompanhamento compartilhado do histórico de consultas.</li>
            <li>Notificações para responsáveis.</li>
            <li>Desconto em agendamentos recorrentes.</li>
          </ul>
          <p>
            Ideal para: Famílias que cuidam de idosos ou pessoas com necessidades contínuas.
          </p>
        </FunctionsCard>
      </div>
    </section>
  );
};

export default Plans;
