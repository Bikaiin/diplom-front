<template>
  <div class="login">
		<b-modal
				:can-cancel="false"
				:active="true"
				has-modal-card
				trap-focus
				aria-role="dialog"
				aria-label="Авторизация"
				aria-modal>
			<template #default="props">
				<div class="modal-card" style="width: auto">
					<header class="modal-card-head">
						<p class="modal-card-title">Авторизация</p>
					</header>
					<section class="modal-card-body">
						<b-field label="Логин">
							<b-input
									v-model="login"
									placeholder="Введите логин"
									required>
							</b-input>
						</b-field>

						<b-field label="Пароль">
							<b-input
									type="password"
									v-model="password"
									password-reveal
									placeholder="Введите пароль"
									required>
							</b-input>
						</b-field>
					</section>
					<footer class="modal-card-foot">
						<b-button
								@click="handleClickLogin"
								label="Войти"
								type="is-primary" />
					</footer>
				</div>
			</template>
		</b-modal>
  </div>
</template>

<script>

import { mapActions} from "vuex";

export default {
	name: 'Login',
	data() {
		return {
			login: '',
			password: ''
		}
	},
	methods: {
		...mapActions('auth', { fnLogin: 'login' }),
		handleClickLogin() {
			if (this.login && this.password) {
				this.fnLogin({
					login: this.login,
					password: this.password
				})
			}

		}
	}
}
</script>
