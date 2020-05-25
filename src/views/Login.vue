<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm>
                <h1>ログイン</h1>
                <p class="text-muted">ホームページ修正依頼システムにログインする</p>
                <CInput
                  placeholder="メールアドレス"
                  autocomplete="username email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="パスワード"
                  type="password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton color="primary" class="px-4">ログイン</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link" class="d-md-none">パスワードを忘れた</CButton>
                    <CButton color="link" class="d-md-none">アカウントの登録</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-sm-down-none"
            body-wrapper
          >
            <h2>アカウントの登録</h2>
            <p>Libertyのメールアドレスでアカウントを登録してシステムを使用してください</p>
            <CButton color="primary" class="active mt-3" v-on:click="goRegister">
              今すぐアカウントを登録する
            </CButton>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>
