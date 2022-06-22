<template>
	<div class="postings">
		<div class="actions">
			<h1 class="title">Посылки</h1>
			<b-button type="is-primary" @click="handleClickAddPosting">Добавить</b-button>
		</div>
		<b-table :data="postings" @click="handleClickPosting($event)" hoverable>
			<b-table-column field="id" label="ID" width="40" v-slot="props">
				{{ props.row.id }}
			</b-table-column>
			<b-table-column field="barcode" label="Баркод" width="100" v-slot="props">
				{{ props.row.barcode }}
			</b-table-column>
			<b-table-column field="width" label="Ширина" width="100" v-slot="props">
				{{ props.row.login }}
			</b-table-column>
			<b-table-column field="length" label="Высота" width="100" v-slot="props">
				{{ props.row.login }}
			</b-table-column>
			<b-table-column field="length" label="Длина" width="100" v-slot="props">
				{{ props.row.login }}
			</b-table-column>
		</b-table>

		<b-modal v-if="posting" :active="isActiveCard" :can-cancel="false">
			<template #default="props">
					<div class="card">
						<h2 v-if="posting && posting.id" class="subtitle">Редактирование посылки</h2>
						<h2 v-else-if="posting" class="subtitle">Добавление посылки</h2>
						<b-field label="Баркод">
							<b-input v-model="posting.barcode" placeholder="Введите"></b-input>
						</b-field>
						<b-field label="Высота">
							<b-input v-model="posting.height" placeholder="Введите высоту"></b-input>
						</b-field>
						<b-field label="Длина">
							<b-input v-model="posting.length" placeholder="Введите длину"></b-input>
						</b-field>
						<b-field label="Ширина">
							<b-input v-model="posting.width" placeholder="Введите ширину"></b-input>
						</b-field>
						<div class="actions">
							<b-button type="is-primary" @click="handleClosePostingForm(props.close)">Отмена</b-button>
							<b-button type="is-info is-light" @click="handleSavePosting(props.close)">Сохранить</b-button>
						</div>
					</div>
			</template>
		</b-modal>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Postings',
	data() {
  		return {
  			posting: null,
		}
	},
	async created() {
		await this.fetch()

  	if (!this.$route.params.postingId) {
			return
		}

		const postingId = parseInt(this.$route.params.postingId)
		const posting = this.postings.find(posting => posting.id === postingId)

		this.posting = posting || null
	},
	components: {},
	computed: {
	...mapState('postings', ['postings']),
		isActiveCard() {
  		return !!this.posting
		}
	},
	methods: {
		handleClickAddPosting() {
			this.posting = {
				barcode: '',
				height: '',
				length: '',
				width: ''
			}
		},
		handleClickPosting(posting) {
  		if (posting) {
				this.posting = posting
				this.$router.replace({
					name: 'posting',
					params: {
						postingId: this.posting.id
					}
				})
			}
		},
		handleClosePostingForm(fnClose) {
			fnClose()
  		this.posting = null
			this.$router.replace({
				name: 'posting'
			})
		},
		async handleSavePosting(fnClose) {
			if (this.posting.id) {
				await this.update(this.posting)
			} else {
				await this.create(this.posting)
			}
			this.handleClosePostingForm(fnClose)
		}
	}
}
</script>

<style scoped>
.postings {
	padding: 10px;
}
.actions {
	display: flex;
	justify-content: space-between;
}
.card {
	width: 500px;
	padding: 20px;
	margin: 0 auto;
}
</style>
