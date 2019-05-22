import Vue from 'vue'
import Router from 'vue-router'

import LoginCadastro from "@/components/sections/LoginCadastro";
import ClienteData from "@/components/sections/ClienteData";
import FuncionarioData from "@/components/sections/FuncionarioData";
import CategoriaData from "@/components/sections/CategoriaData";
import ProdutoData from "@/components/sections/ProdutoData";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'LoginCadastro',
      component: LoginCadastro
    },
    {
      path: '/funcionarios',
      name: 'FuncionarioData',
      component: FuncionarioData
    },
    {
      path: '/categorias',
      name: 'CategoriaData',
      component: CategoriaData
    },
    {
      path: '/produtos',
      name: 'ProdutoData',
      component: ProdutoData
    }
  ]
})
