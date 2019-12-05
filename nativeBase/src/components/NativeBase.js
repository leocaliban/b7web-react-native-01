import React from 'react';
import {
    Button,
    Text,
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Subtitle,
    Content,
    Form,
    Item,
    Input
} from 'native-base';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1
`;

export default () => {
    return (
        <Page>
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Cadastro</Title>
                        <Subtitle>Login</Subtitle>
                    </Body>
                    <Right />
                </Header>

                <Content style={{ paddingHorizontal: 20, marginTop: 40 }}>
                    <Form>
                        <Item>
                            <Input placeholder="Usuário" />
                        </Item>
                        <Item last>
                            <Input placeholder="Senha" />
                        </Item>
                    </Form>
                    <Button block rounded style={{ marginTop: 20 }}>
                        <Text>SALVAR</Text>
                    </Button>
                </Content>
            </Container>
        </Page>
    );
}