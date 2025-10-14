<script lang="ts">
	import type { MonthMap, MonthName } from "$lib/types/types";

    const months: MonthMap = new Map<number, MonthName>([
		[1, 'Enero' as MonthName],
		[2, 'Febrero' as MonthName],
		[3, 'Marzo' as MonthName],
		[4, 'Abril' as MonthName],
		[5, 'Mayo' as MonthName],
		[6, 'Junio' as MonthName],
		[7, 'Julio' as MonthName],
		[8, 'Agosto' as MonthName],
		[9, 'Septiembre' as MonthName],
		[10, 'Octubre' as MonthName],
		[11, 'Noviembre' as MonthName],
		[12, 'Diciembre' as MonthName]
	]);

    interface CalendarMonthList {
        mouseX: number;
        mouseY: number;
        selectedMonth: number;
        isMonthListOpen: boolean;
    }

    let { mouseX, mouseY, selectedMonth , isMonthListOpen}: CalendarMonthList = $props();

    function changeMonth(newSelectedMonth: number): void {
        selectedMonth = newSelectedMonth;
        isMonthListOpen = !isMonthListOpen;
    }
</script>

<div class="month-list" style={`left: ${mouseX}px; top: ${mouseY}px;`}>
    {#each months as month}
        <div class="btn-container" class:selected-month={month[0] === selectedMonth}>
            <button class="btn-month" onclick={() => changeMonth(month[0])}>{month[1]}</button>
        </div>
    {/each}
</div>

<style>
    .month-list {
        background-color: white;
        position: absolute;
        width: max-content;
        border-radius: 10px;
        padding: 0.2rem 1rem;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .btn-container {
        display: block;
        padding: 0.2rem 0.5rem;
        border-radius: 10px;
        align-items: center;
        text-align: center;
    }

    .selected-month {
        background-color: black;
        color: white;
    }
</style>