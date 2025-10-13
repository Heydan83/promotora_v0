export type MonthName =
	| 'Enero'
	| 'Febrero'
	| 'Marzo'
	| 'Abril'
	| 'Mayo'
	| 'Junio'
	| 'Julio'
	| 'Agosto'
	| 'Septiembre'
	| 'Octubre'
	| 'Noviembre'
	| 'Diciembre';

export type MonthMap = Map<number, MonthName>;

export type DayName =
    | 'Lunes'
    | 'Martes'
    | 'Miercoles'
    | 'Jueves'
    | 'Viernes'
    | 'Sabado'
    | 'Domingo'

export type DayMap = Map<number, DayName>;

export type Menu = 
    | 'Calendario'
    | 'Clientes'
    | 'Promotoras'
    | 'Configuracion'
    | ''
