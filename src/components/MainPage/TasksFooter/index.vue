<template>
    <div class="text-center">
        <AddTask></AddTask>
        <TurnPage></TurnPage>
    </div>
</template>

<script>
import AddTask from './AddTask'
import TurnPage from './TurnPage'

export default {
name:"TasksFooter",
components:{AddTask,TurnPage}
}
</script>

<style>

</style>