<template>
	<div>
		<h1>Test</h1>
		<p>This is the homepage</p>
		<router-link to="page">Page</router-link> 
	</div>
</template>
<script>
export default{
	mounted(){
		console.log("hi home"); 
	}
}
</script>
<style>
h1{
	font-size: 50px;
}
</style>