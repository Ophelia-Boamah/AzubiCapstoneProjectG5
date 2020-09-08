from django.test import APITestCase

# Create your tests here.


class userAccountTestCase(APITestCase):
    account_list_url = reverse('all-accounts')

    def setUp(self):
        # create a new user making a post request to djoser endpoint
        self.user = self.client.post(
            '/auth/users/', data={'username': 'John', 'password': 'goodjobdone'})
        # obtain a json web token for the newly created user
        response = self.client.post(
            '/auth/jwt/create/', data={'username': 'John', 'password': 'goodjobdone'})
        self.token = response.data['access']
        self.api_authentication()

    def api_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION='Bearer '+self.token)

    # retrieve a list of all user accounts while the request user is authenticated
    def test_useraccount_list_authenticated(self):
        response = self.client.get(self.account_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # retrieve a list of all user accounts while the request user is unauthenticated
    def test_useraccount_list_unauthenticated(self):
        self.client.force_authenticate(user=None)
        response = self.client.get(self.account_list_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # check to retrieve the account details of the authenticated user
    def test_useraccount_detail_retrieve(self):
        response = self.client.get(reverse('account', kwargs={'pk': 1}))
        # print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # populate the user account that was automatically created using the signals

    def test_useraccount_account(self):
        account_data = {'address': 'East Legon, Accra, Ghana',
                        'phone': '+233502568246', 'city': 'Accra', 'is_creator': 'true', }
        response = self.client.put(
            reverse('account', kwargs={'pk': 1}), data=account_data)
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
