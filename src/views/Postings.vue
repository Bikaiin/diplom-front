<template>
	<div class="postings">
		<template v-if="postingCups">
			<div class="cap">Не достаточно прав для страницы "Постинги"</div>
		</template>

		<template v-else>
			<div class="actions">
				<h1 class="title">Посылки</h1>
				<b-button type="is-primary" @click="handleClickAddPosting">Добавить</b-button>
			</div>
			<b-table :data="postings" hoverable>
				<b-table-column field="id" label="ID" width="40" v-slot="props">
					{{ props.row.id }}
				</b-table-column>
				<b-table-column field="barcode" label="Баркод" width="100" v-slot="props">
					{{ props.row.barcode }}
				</b-table-column>
				<b-table-column field="width" label="Ширина" width="100" v-slot="props">
					{{ props.row.size.width }}
				</b-table-column>
				<b-table-column field="height" label="Высота" width="100" v-slot="props">
					{{ props.row.size.height }}
				</b-table-column>
				<b-table-column field="lenght" label="Длина" width="100" v-slot="props">
					{{ props.row.size.lenght }}
				</b-table-column>
				<b-table-column field="edit" label="" width="50" v-slot="props">
					<b-button type="is-text" @click="handleClickPosting(props.row)">редактировать</b-button>
				</b-table-column>
				<b-table-column field="event" label="" width="50" v-slot="props">
					<b-button type="is-text" @click="handleClickShowEvents(props.row.id)">показать события</b-button>
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
						<b-field label="Ширина">
							<b-input v-model="posting.size.width" placeholder="Введите ширину"></b-input>
						</b-field>
						<b-field label="Высота">
							<b-input v-model="posting.size.height" placeholder="Введите высоту"></b-input>
						</b-field>
						<b-field label="Длина">
							<b-input v-model="posting.size.lenght" placeholder="Введите длину"></b-input>
						</b-field>
						<div class="actions">
							<b-button type="is-primary" @click="handleClosePostingForm(props.close)">Отмена</b-button>
							<b-button type="is-info is-light" @click="handleSavePosting(props.close)">Сохранить</b-button>
						</div>
					</div>
				</template>
			</b-modal>


			<section>
				<b-modal
						v-if="!!postingId"
						:active="isActiveEvents"
						has-modal-card
						full-screen
						:can-cancel="false"
				>
					<div class="modal-card" style="width: auto">
						<header class="modal-card-head">
							<p class="modal-card-title">События постинга</p>
						</header>
						<section class="modal-card-body">
							<b-table :data="events" hoverable>
								<b-table-column field="user" label="Инициатор" width="40" v-slot="tableProps">
									{{ getUserNameById(tableProps.row.changer) }}
								</b-table-column>
								<b-table-column field="date" label="Время" width="40" v-slot="tableProps">
									{{ tableProps.row.time }}
								</b-table-column>
								<b-table-column field="postingId" label="Постинг ID" width="40" v-slot="tableProps">
									{{ tableProps.row.parcel.id }}
								</b-table-column>
								<b-table-column field="barcode" label="Баркод" width="100" v-slot="tableProps">
									{{ tableProps.row.parcel.barcode }}
								</b-table-column>
								<b-table-column field="width" label="Ширина" width="100" v-slot="tableProps">
									{{ tableProps.row.parcel.size.width }}
								</b-table-column>
								<b-table-column field="height" label="Высота" width="100" v-slot="tableProps">
									{{ tableProps.row.parcel.size.height }}
								</b-table-column>
								<b-table-column field="lenght" label="Длина" width="100" v-slot="tableProps">
									{{ tableProps.row.parcel.size.lenght }}
								</b-table-column>
							</b-table>
						</section>
						<footer class="modal-card-foot">
							<b-button
									label="Close"
									@click="handleCloseEvents" />
						</footer>
					</div>
				</b-modal>
			</section>
		</template>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Postings',
	data() {
  		return {
  			posting: null,
				postingId: null
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
	computed: {
		...mapState('postings', ['postings']),
		...mapState('events', ['eventsByPostingId']),
		...mapState('users', ['users']),
		...mapState('cups', ['postingCups']),
		isActiveCard() {
  		return !!this.posting
		},
		isActiveEvents() {
  		return !!this.postingId
		},
		events() {
			if (!this.postingId) {
				return []
			}

			const events = this.eventsByPostingId.find(item => item.id == this.postingId)
			return events ? events.events : []
		}
	},
	methods: {
		...mapActions('postings', ['fetch', 'create', 'update']),
		...mapActions('events', ['fetchByPostingId']),
		getUserNameById(id) {
			return this.users.find(user => user.id == id)?.login || 'неизвестный пользователь'
		},
		handleClickAddPosting() {
			this.posting = {
				barcode: '',
				size: {
					height: '',
					width: '',
					lenght: '',
				}
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
		},
		async handleClickShowEvents(id) {
			this.postingId = id
			await this.fetchByPostingId(id)
		},
		handleCloseEvents() {
			this.postingId = null
		}
	}
}
</script>

<style scoped>
.postings {
	padding: 10px;
	position: relative;
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
