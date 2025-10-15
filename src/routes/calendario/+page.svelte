<script lang="ts">
    import { Navigation } from '$states';
	import Calendar from "$components/calendar/Calendar.svelte";

    Navigation.navigateTo('Calendario');
</script>

<Calendar />