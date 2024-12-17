<template>
    <section class = "banner">
        <div class="banner-content">
            <h3> The Technology Ambassadors Program (TAP) aligns with GGC’s four pillars – <em>scholarship, leadership, service and creativity </em> – with a focused commitment to service learning. 
            <a href="https://www.ggc.edu/academics/school-of-science-and-technology/research-internships-service-learning/technology-ambassador-program" class="click">Read more...</a></h3>
        </div>
    </section>
</template>

<script>
export default{
    name: "Banner",
}
</script>

<style scoped>
.banner{
    background-color: var(--agnostic-gray-mid);
    color: var(--agnostic-dark);
    text-align: center;
    padding: 2rem 3rem;
    width: 100vw;
}
.banner-content{
    width: 70%;
    font-weight: 300;
    padding: 1rem 0.625rem;
    margin: 0 auto;
}
a .click{
    display: inline-block;
    color: var(--agnostic-dark) !important;
}
.banner h3{
    font-weight: 300 !important;
    font-size: 1rem;
}

</style>