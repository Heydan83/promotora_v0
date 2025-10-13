<script lang="ts">
	import Calendar from "$components/Calendar.svelte";
    import { navigation } from '$states';

    navigation.navigateTo('Calendario');
</script>

<Calendar />