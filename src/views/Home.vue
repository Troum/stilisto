<template>
      <div class="row my-3">
          <div class="col-xl-8 mx-auto">
              <div class="row">
                  <avatar :image="image"/>
                  <description :name="$ml.get('description.name')" :description="$ml.get('description.description')"/>
              </div>
          </div>

      </div>
</template>

<script>
import Avatar from "../components/Avatar";
import Description from "../components/Description";
export default {
    components: {
        Description,
        Avatar
    },
    data() {
        return {
            image: require('../assets/stilisto.jpg')
        }
    }
}
</script>
