<script lang="ts">
	import Calendar from "$components/calendar/Calendar.svelte";
    import { navigation } from '$states';

    navigation.navigateTo('Calendario');
</script>

<Calendar />