<template>
  <section :class="$style.slides">
    <article v-for="item in slides" :key="item.oid" :class="$style.item">
      <NuxtLink :to="`/`" :class="$style.link" :title="item.title.title" />
      <div :class="$style.image">
        <img :src="getImgUrl(item.title.assets[0]?.resize_url)" :alt="item.title.title">
      </div>
      <div :class="$style.content">
        <h2 :class="$style.title">
          {{ item.title.title }}
        </h2>
        <footer :class="$style.footer">
          <p :class="$style.description">
            {{ item.title.synopsis }}
          </p>
          <div :class="$style.links">
            <div style="display: flex; flex-wrap: wrap; grid-gap: 4px">
              <div v-for="genre in item.title.genres" :key="genre.oid" :class="$style.tag">
                {{ genre.name }}
              </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; grid-gap: 4px">
              <div v-for="label in item.title.labels" :key="label.oid" :class="$style.tag">
                {{ label.name }}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import type { SlideType } from '~/widgets/Showcase/model/Slide';

const SIZE = 720;
const getImgUrl = (url: string) => url.replace('{w}', String(SIZE)).replace('{h}', String(SIZE));

defineProps<{
  slides: SlideType[],
}>();
</script>

<style lang="postcss" module>
.slides {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  font-size: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    font-size: 10px;
  }

  .item {
    position: relative;
    border-radius: 16px;
    background-color: white;
    border: thin solid wheat;
    overflow: hidden;
    aspect-ratio: 2/1;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background: linear-gradient(0deg,rgba(255,255,255,1) 0%, rgba(255,255,255,.2) 30%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%);
    box-sizing: border-box;
  }

  .link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
  }

  .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: white;
    overflow: hidden;
    border-radius: 16px;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .title {
    display: inline-block;
    background-color: orange;
    padding: 2px 6px;
    margin: 0 0 20px;
    font-size: 1.2rem;
  }

  .description {
    margin-bottom: 20px;
    margin-top: auto;
  }

  .footer {
    align-self: stretch;
    background-color: orange;
    padding: 2px 6px;
  }

  .links {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    grid-gap: 24px;
  }

  .tag {
    border-radius: 100px;
    padding: 2px 4px;
    background-color: white;
    font-size: 12px;
  }
}
</style>
