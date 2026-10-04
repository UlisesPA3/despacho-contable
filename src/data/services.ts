// Catálogo compartido por las tarjetas y el selector de contacto.
export const services = [
  {
    id: "sueldos-salarios",
    title: "Sueldos y Salarios",
    badge: "Personas Físicas",
    price: "$500",
    period: "por presentación o 30% en devolución",
    description: "Cálculo y presentación experta de tu declaración anual ante el SAT, maximizando tus saldos a favor con estricto apego a ley.",
    features: [
      "Presentación formal de Declaración Anual",
      "Esquema 30% sobre devolución o $500 fijo",
      "Revisión y validación de deducciones personales",
      "Seguimiento puntual del estatus ante el SAT"
    ],
    highlight: false,
    accentBorder: "group-hover:border-amber-400"
  },
  {
    id: "resico",
    title: "RESICO Personas Físicas",
    badge: "Régimen Más Popular",
    price: "Desde $900",
    period: "al mes",
    description: "Acompañamiento integral para contribuyentes en el Régimen Simplificado de Confianza con tasas preferenciales de ISR.",
    features: [
      "Declaraciones mensuales definitivas (ISR e IVA)",
      "Declaración Anual obligatoria en tiempo y forma",
      "Conciliación de CFDI emitidos y recibidos",
      "Asesoría fiscal continua para conservar el régimen"
    ],
    highlight: true,
    accentBorder: "border-amber-400 ring-2 ring-amber-400/40 shadow-xl shadow-amber-500/10"
  },
  {
    id: "rif",
    title: "RIF (En Transición)",
    badge: "Régimen de Incorporación",
    price: "$800",
    period: "bimestral",
    description: "Control riguroso de tus reducciones porcentuales y cumplimiento bimestral para quienes permanecen en RIF.",
    features: [
      "Declaraciones bimestrales definitivas SAT",
      "Aplicación de coeficientes de reducción fiscal",
      "Mantenimiento de opinión de cumplimiento positiva",
      "Asesoría para migración gradual a RESICO"
    ],
    highlight: false,
    accentBorder: "group-hover:border-slate-400"
  },
  {
    id: "actividad-empresarial",
    title: "Actividad Empresarial y Honorarios",
    badge: "Profesionistas & Negocios",
    price: "Desde $1,300",
    period: "al mes",
    description: "Gestión contable estratégica para médicos, abogados, consultores, arquitectos y actividades comerciales.",
    features: [
      "Cálculos y declaraciones provisionales de ISR e IVA",
      "Declaración anual y balanza contable",
      "Conciliación bancaria y opinión de cumplimiento 32-D",
      "Optimización de gastos deducibles de operación"
    ],
    highlight: false,
    accentBorder: "group-hover:border-amber-400"
  },
  {
    id: "personas-morales",
    title: "Personas Morales (Régimen General)",
    badge: "Corporativo & PYMES",
    price: "Desde $4,500",
    period: "al mes",
    description: "Ecosistema fiscal y contable robusto para sociedades mercantiles que demandan cumplimiento impecable.",
    features: [
      "Contabilidad electrónica mensual y balanzas XML",
      "Presentación de DIOT y pagos provisionales",
      "Nómina timbrada de hasta 5 empleados incluida",
      "Revisión fiscal estratégica para toma de decisiones"
    ],
    highlight: false,
    accentBorder: "group-hover:border-amber-400"
  },
  {
    id: "servicios-especiales",
    title: "Servicios Especiales y Regularización",
    badge: "Blindaje & Soluciones",
    price: "Cotización a medida",
    period: "tarifas fijas transparentes",
    description: "Intervención inmediata para rescate fiscal, actualización de ejercicios rezagados y auditoría preventiva.",
    features: [
      "Regularización fiscal: $10,000 por 5 años completos",
      "Nómina adicional: $100 por empleado al mes",
      "Asesoría fiscal personalizada 1 a 1: $500 por hora",
      "Corrección, sustitución y cancelación de CFDIs"
    ],
    highlight: false,
    accentBorder: "group-hover:border-emerald-400"
  }
];
