import React from 'react';
import { Image, View, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem(){
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar} 
          source = {{ uri:'https://avatars.githubusercontent.com/u/5804067?v=4'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Denis Marcedo</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Mestre e estudioso atrapalhado nos calculos.
        {'\n'}{'\n'}
        Maluco por matemática, vai fazer uma cofusão na sua cabeça e explica um simples calculo de maneira que vai deixar você louco e comer o o livro de tanta raiva.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favotited]}>
            {/*<Image source={heartOutlineIcon}/>*/}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;