<template>
    <section class = "banner">
        <div class="banner-content">
            <h3> The Technology Ambassadors Program (TAP) aligns with GGC’s four pillars – scholarship, leadership, service and creativity – with a focused commitment to service learning. This award-winning program also addresses a need to increase the number of students who persist in an IT major or IT minor, particularly those underrepresented in computing.</h3>
            <a href="#" class="click">Read more...</a>
        </div>
    </section>
</template>

<script>
export default{
    name: "BannerComponent",
}
</script>

<style scoped>
.banner{
    background-color: var(--agnostic-primary);
    color: var(--agnostic-dark);
    text-align: center;
    padding: 2rem 1rem;
    width: 100vh;
}
.banner-content{
    font-size: 1.25rem;
    width: 1440px;
    font-weight: 500;
    margin: 0 auto;
}
.click{
    display: inline-block;
    color: var(-)
}

</style>